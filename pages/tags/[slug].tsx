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

import { NextSeo } from 'next-seo';
import { siteMetadata } from 'site/siteMatedata';

type Props = {
    posts: Post[],
    matchedPosts: Post[]
}

const TagsLayout = ({ posts, matchedPosts }: Props) => {

    const { query, asPath } = useRouter()
    console.log(query);


    return (
        <>
            <NextSeo
                title={`Tags: ${query.slug} | ${siteMetadata.title}`}
                description={`Posts about ${query.slug}`}
                canonical={siteMetadata.siteAddess}
                openGraph={{
                    url: `${siteMetadata.siteAddess}${asPath}`,
                    title: `#${query.slug} | ${siteMetadata.title}`,
                    description: `Posts about #${query.slug}`,
                    images: [
                        {
                            url: '/assets/site/tag-light.svg',
                            width: 800,
                            height: 600,
                            alt: 'personal home',
                            type: 'image/svg',
                        },
                        // { url: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' },
                    ],
                    site_name: `${siteMetadata.title}`,
                }}
                twitter={{
                    handle: `${siteMetadata.twitter}`,
                    site: `${siteMetadata.twitter}`,
                    cardType: 'summary_large_image',
                }}
            />
            <Spotlight data={posts}>
                <Layout title={`Tags: ${query.slug}`}>
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
        </>
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