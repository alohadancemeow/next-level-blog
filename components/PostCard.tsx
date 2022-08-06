import { Post } from 'contentlayer/generated'
import React from 'react'
import { format, parseISO } from "date-fns";
import Link from 'next/link';

import { Card, Image, Text } from '@mantine/core';
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

                    sx={(theme) => ({
                        '&:hover': {
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[5]
                                    : theme.colors.gray[1],
                            transform: 'translateY(-8px)',
                            transition: 'ease .3s'
                        }
                    })}
                >
                    <Text size='xs' mb={'xs'}>
                        <time dateTime={post.date}>
                            🪶 {format(parseISO(post.date), "LLLL d, yyyy")}
                        </time>
                    </Text>

                    <Card.Section>
                        <Image
                            // src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            src={post.image}
                            height={180}
                            alt="post image"
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