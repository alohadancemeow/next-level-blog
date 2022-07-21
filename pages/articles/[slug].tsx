import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Container, Space, Stack, Center, Title } from '@mantine/core';
import Tags from "components/Tags";
import Layout from "components/Layout";


const PostLayout = ({ post }: { post: Post }) => {
    return (
        <Layout title={post.title}>
            <Container style={{
                 width: '100%',
                 height: '100%',
            }}>
                <Center
                    style={{
                        width: '90%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        margin: "0 auto",
                    }}>
                    <Stack style={{ margin: '0 2rem' }}>
                        <article>
                            <Center style={{
                                display: "flex",
                                flexDirection: 'column',
                                gap: 5,
                            }}>
                                <time dateTime={post.date}>
                                    {format(parseISO(post.date), "LLLL d, yyyy")}
                                </time>
                                <Title style={{ backgroundColor: 'orange', padding: '5px 10px' }}>
                                    {post.title}
                                </Title>
                                <Tags tags={post.tags} />
                                <Space h="xs" />
                            </Center>
                            <div
                                className="prose"
                                dangerouslySetInnerHTML={{ __html: post.body.html }}
                            />
                        </article>
                    </Stack>
                </Center>
            </Container>
        </Layout>
    );
};

export default PostLayout;


export const getStaticPaths: GetStaticPaths = () => {
    const paths: string[] = allPosts.map((post) => post.url);
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    const post = allPosts.find(
        (post) => post._raw.flattenedPath === params!.slug
    );
    return {
        props: {
            post,
        },
    };
}
