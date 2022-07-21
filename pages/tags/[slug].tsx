import { allPosts, Post } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { Space } from '@mantine/core'
import PostCard from "components/PostCard"
import Layout from "components/Layout";
import Menu from '../../components/Menu'
import PageLayout from '../../components/PageLayout'


const TagsLayout = ({ posts }: { posts: Post[] }) => {

    const { query, asPath } = useRouter()

    return (
        <Layout title={asPath}>
            <PageLayout>
                <Menu title={`Tag: ${query.slug}`} />
                <Space h={'xs'} />

                {posts.map((item, idx) => (
                    <PostCard key={idx} post={item} />
                ))}

            </PageLayout>
        </Layout>
    );
};

export default TagsLayout;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: string[] = []

    allPosts.forEach((post) =>
        post.tags.forEach(tag => (
            paths.push(`/tags/${tag.split(" ").join('-')}`)
        ))
    )
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const posts: Post[] = []

    allPosts.forEach(post => (
        post.tags.forEach(tag => {
            if (tag.split(' ').join('-') === params!.slug) {
                posts.push(post)
            }
        })
    ))
    return {
        props: {
            posts,
        },
    };
}