import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        tags: {
            type: 'list',
            description: 'Tags of the post',
            required: true,
            of: {
                type: 'string'
            }
        },
        description: {
            type: 'string',
            description: "The description of the post",
            required: true
        },
        image: {
            type: 'string',
            description: "Image of the post",
            required: true
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
            rehypeKatex,
            rehypeCodeTitles,
            rehypeHighlight,
            rehypeSlug,
            rehypeAutolinkHeadings,
            // rehypePrism,        
        ]
    }
})