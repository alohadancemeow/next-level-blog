import { unified } from "unified";
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import parameterize from 'parameterize';
import { Post } from "contentlayer/generated";

export type ContentHeader = {
    label: string
    link: string
    order: number
}

export const getTableOfContents = (post: Post) => {

    const contentHeader: ContentHeader[] = []

    const contentWithId = unified()
        .use(rehypeParse, {
            fragment: true,
        })
        .use(() => {
            return (tree) => {
                // console.log('tree', tree)
                visit(tree, 'element', (node) => {

                    if (['h1', 'h2', 'h3'].includes(node.tagName)) {
                        // console.log('node', node);

                        const id = parameterize(node.children[0].value)
                        node.properties!.id = id

                        const capitalizedId = capitalized(id)

                        contentHeader.push({
                            label: capitalizedId,
                            link: `${id}`,
                            order: 1
                        })
                    }
                })
            }
        })
        .use(rehypeStringify)
        .processSync(post.body.html)
        .toString()

    return { contentWithId, contentHeader }
}

// capitalize element id for label of table
const capitalized = (text: string) => {

    const capitalizedFristCharacter = text
        .charAt(0)
        .toUpperCase()

    const slicedFirstCharacter = text
        .slice(1)
        .split("-")
        .join(" ")
        .toLowerCase()

    return capitalizedFristCharacter + slicedFirstCharacter
}