import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Space } from '@mantine/core';

import PostCard from '../../components/PostCard'
import Menu from '../../components/Menu'
import TagsBanner from '../../components/TagsBanner'
import Layout from '../../components/Layout'
import PageLayout from '../../components/PageLayout'

type Tags = {
    [key: string]: number
}

type Props = {
    posts: Post[],
    tags: Tags
}

const PostsPage: NextPage<Props> = ({ posts, tags }) => {
    // console.log(tags);

    return (
        <Layout title='Posts'>
            <PageLayout>
                <Menu title='alohadancemeow blog' />
                <TagsBanner {...tags} />
                <Space h="xs" />

                {posts.map((item, idx) => (
                    <PostCard key={idx} post={item} />
                ))}

            </PageLayout>
        </Layout>
    )
}

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