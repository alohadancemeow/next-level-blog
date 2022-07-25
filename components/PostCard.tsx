import { Post } from 'contentlayer/generated'
import React from 'react'
import { format, parseISO } from "date-fns";
import Link from 'next/link';

import { Title, Box, Card, Image, Text, Grid } from '@mantine/core';
import Tags from './Tags'

type Props = {
    post: Post
}

const PostCard = ({ post }: Props) => {
    return (
        <div>
            <Link href={post.url}>
                <Card
                    component="a"
                    shadow="sm"
                    p="xl"
                    radius={'sm'}
                    style={{ height: '450px' }}
                >
                    <Text size='xs' mb={'xs'}>
                        <time dateTime={post.date}>
                            🪶 {format(parseISO(post.date), "LLLL d, yyyy")}
                        </time>
                    </Text>

                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            height={160}
                            alt="No way!"
                        />
                    </Card.Section>

                    <Tags tags={post.tags} />
                    <Text weight={500} size="lg" mt={'sm'}>
                        {post.title}
                    </Text>
                    <Text mt="xs" color="dimmed" size="sm">
                        {post.description}
                    </Text>
                </Card>
            </Link>
        </div>
    )
}

export default PostCard