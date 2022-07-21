import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Container, Divider, Space, Stack, Center } from '@mantine/core';

import PostCard from '../../components/PostCard'
import Menu from '../../components/Menu'
import TagsBanner from '../../components/TagsBanner'
import Layout from '../../components/Layout'

type Tags = {
    [key: string]: number
}

type Props = {
    posts: Post[],
    tags: Tags
}

const ArticlesPage: NextPage<Props> = ({ posts, tags }) => {
    // console.log(tags);

    return (
        <Layout title='Articles'>
            <Container>
                <Center
                    style={{
                        width: '100%',
                        // height: '100vh',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        // border: '1px solid red'

                    }} >
                    <Stack style={{ margin: '0 2rem' }}>
                        <Menu />
                        <TagsBanner {...tags} />

                        {/* <Divider my="xs" variant="solid" /> */}
                        <Space h="xs" />

                        {posts.map((item, idx) => (
                            <PostCard key={idx} post={item} />
                        ))}
                    </Stack>
                </Center>
            </Container>
        </Layout>
    )
}

export default ArticlesPage


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