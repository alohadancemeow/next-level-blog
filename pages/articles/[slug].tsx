import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Container, Space, Stack, Center, Title, Grid } from '@mantine/core';
import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from '../../components/TableOfContents'

import { getTableOfContents } from '../../lib/getTableOfContents'


const PostLayout = ({ post }: { post: Post }) => {
    // console.log(post);

    const { contentHeader, contentWithId } = getTableOfContents(post)

    return (
        <Layout title={post.title}>
            <Container
                size={'xl'}
                style={{
                    // maxWidth: '100vw',
                    height: '100%',
                }}
            >
                <Grid grow gutter={'xl'}>
                    <Grid.Col md={2} lg={3} xl={3} >
                    </Grid.Col>
                    <Grid.Col sm={4} md={6} lg={6} xl={6}>
                        <Center
                            style={{
                                // width: '90%',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                margin: "0 auto",
                            }}
                        >
                            <Stack
                            // style={{ margin: '0 2rem' }}
                            >
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
                                        dangerouslySetInnerHTML={{ __html: contentWithId }}
                                    />
                                </article>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={2} lg={2} xl={3}>
                        {contentHeader && <TableOfContents links={contentHeader} />}
                    </Grid.Col>
                </Grid>
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
