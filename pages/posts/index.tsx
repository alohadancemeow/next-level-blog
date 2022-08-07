import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Space, Grid } from '@mantine/core';

import PostCard from 'components/PostCard'
import Menu from 'components/Menu'
import TagsBanner from 'components/TagsBanner'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import Spotlight from 'components/Spotlight';
import SearchPost from 'components/SearchPost'

import { NextSeo } from 'next-seo';
import { siteMetadata } from 'site/siteMatedata'

type Tags = {
    [key: string]: number
}

type Props = {
    posts: Post[],
    tags: Tags
}

const PostsPage: NextPage<Props> = ({ posts, tags }) => {

    return (
        <>
            <NextSeo
                title={`Posts | ${siteMetadata.title}`}
                description={`All posts from ${siteMetadata.title}`}
                canonical={siteMetadata.siteAddress}
                openGraph={{
                    url: `${siteMetadata.siteAddress}/posts`,
                    title: `Posts | ${siteMetadata.title}`,
                    description: `All posts from ${siteMetadata.title} blog`,
                    images: [
                        {
                            url: '/assets/site/og-posts.png',
                            alt: 'posts page',
                            type: 'image/png',
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

            <Contents posts={posts} tags={tags} />
        </>
    )
}

const Contents: React.FC<Props> = React.memo(({ posts, tags }) => (
    <Spotlight data={posts}>
        <Layout title='Posts'>
            <PageLayout>
                <Menu title='alohadancemeow blog' />
                <SearchPost />
                <TagsBanner {...tags} />

                <Space h="xs" />

                <Grid gutter="lg">
                    {posts.map((item, idx) => (
                        <Grid.Col key={idx} xs={6} md={4}>
                            <PostCard post={item} />
                        </Grid.Col>
                    ))}
                </Grid>

            </PageLayout>
        </Layout>
    </Spotlight>
))

export default PostsPage


export const getStaticProps: GetStaticProps = async () => {
    // Get all posts,
    // Sorting the posts by date.
    const posts: Post[] = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })

    // Get all tags
    const tags: Tags = {}
    allPosts.map(post => (
        post.tags.map(tag => {
            if (!tags[tag]) {
                tags[tag] = 1
            } else {
                tags[tag] += 1
            }
        })
    ))

    return {
        props: {
            posts,
            tags
        }
    }
}