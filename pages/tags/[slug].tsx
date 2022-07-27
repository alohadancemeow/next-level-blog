import { allPosts, Post } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { compareDesc } from "date-fns";

import { Space, Grid } from '@mantine/core'
import PostCard from "components/PostCard"
import Layout from "components/Layout";
import Menu from 'components/Menu'
import PageLayout from 'components/PageLayout'
import Spotlight from 'components/Spotlight'
import SearchPost from 'components/SearchPost'

type Props = {
    posts: Post[],
    matchedPosts: Post[]
}

const TagsLayout = ({ posts, matchedPosts }: Props) => {

    const { query, asPath } = useRouter()

    return (
        <Spotlight data={posts}>
            <Layout title={asPath}>
                <PageLayout>
                    <Menu title={`#${query.slug}`} />
                    <SearchPost />
                    <Space h={'xs'} />

                    <Grid gutter="lg">
                        {matchedPosts.map((item, idx) => (
                            <Grid.Col key={idx} xs={6} md={4}>
                                <PostCard post={item} />
                            </Grid.Col>
                        ))}
                    </Grid>

                </PageLayout>
            </Layout>
        </Spotlight>
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
    const matchedPosts: Post[] = []

    // Get all posts,
    // Sorting the posts by date.
    const posts: Post[] = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })

    // Get posts that matched with tag
    allPosts.forEach(post => (
        post.tags.forEach(tag => {
            if (tag.split(' ').join('-') === params!.slug) {
                matchedPosts.push(post)
            }
        })
    ))

    return {
        props: {
            posts,
            matchedPosts
        },
    };
}