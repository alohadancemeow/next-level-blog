import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypeHightlight from 'rehype-highlight'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.md`,
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
        }
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
    markdown: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeHightlight, rehypeKatex]
    },
})