import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Container, Space, Stack, Center, Title, Grid, Box, MediaQuery } from '@mantine/core';
import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from '../../components/TableOfContents'

import { getTableOfContents } from '../../lib/getTableOfContents'


const PostLayout = ({ post }: { post: Post }) => {
    // console.log(post);

    const { contentHeader, contentWithId } = getTableOfContents(post)

    // # Title of contents
    const ContentTitle = () => (
        <Center style={{
            display: "flex",
            flexDirection: 'column',
            gap: 5,
        }}>
            <time dateTime={post.date}>
                {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
            <Title
                style={{ backgroundColor: 'orange', padding: '5px 10px' }}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { fontSize: '25px' },
                    [theme.fn.smallerThan('xs')]: { fontSize: '12px' },
                })}
            >
                {post.title}
            </Title>
            <Tags tags={post.tags} />
            <Space h="xs" />
        </Center>
    )

    // Body of contents
    const ContentBody = () => (
        <Grid grow gutter={'xl'}>

            <Grid.Col md={2} lg={3}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { display: 'none' },
                })}
            />

            <Grid.Col md={6} lg={6}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { padding: '0 6rem' },
                    [theme.fn.smallerThan('xs')]: { padding: '0 2.5rem', fontSize: '12px' },
                })}
            >
                <article>
                    <div dangerouslySetInnerHTML={{ __html: contentWithId }} />
                </article>
            </Grid.Col>

            <Grid.Col md={2} lg={3}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { display: 'none' },
                })}
            >
                {contentHeader && <TableOfContents links={contentHeader} />}
            </Grid.Col>
        </Grid>
    )

    return (
        <Layout title={post.title}>
            <Container
                size={'xl'}
                style={{
                    height: '100%',
                    padding: '0'
                }}
            >
                <ContentTitle />
                <ContentBody />
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
