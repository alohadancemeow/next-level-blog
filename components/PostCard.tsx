import { Post } from 'contentlayer/generated'
import React from 'react'
import { format, parseISO } from "date-fns";
import Link from 'next/link';

import { Title } from '@mantine/core';
import Tags from './Tags'

type Props = {
    post: Post
}

const PostCard = ({ post }: Props) => {
    return (
        <div >
            <Title order={2}>
                <Link href={post.url}>
                    <a >{post.title}</a>
                </Link>
            </Title>
            <time dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>

            <Tags tags={post.tags} />

            <div
                dangerouslySetInnerHTML={{ __html: post.description }}
            />
        </div>
    )
}

export default PostCard