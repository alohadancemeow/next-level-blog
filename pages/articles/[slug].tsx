import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Container, Space, Stack, Center, Title } from '@mantine/core';
import Header from '../../components/Header'
import Tags from "components/Tags";


const PostLayout = ({ post }: { post: Post }) => {
    return (
        <>
            <Head>
                <title>{`alohdancemeow | ${post.title}`}</title>
            </Head>

            <Container>
                <Center
                    style={{
                        width: '90%',
                        // height: '100vh',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        // border: '1px solid red'

                    }} >
                    <Stack style={{ margin: '0 2rem' }}>
                        <Header />
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
        </>
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
