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
            <Title style={{ backgroundColor: 'orange', padding: '5px 10px' }}>
                {post.title}
            </Title>
            <Tags tags={post.tags} />
            <Space h="xs" />
        </Center>
    )

    // Body of contents
    const ContentBody = () => (
        <Grid grow gutter={'xl'}>
            <MediaQuery
                smallerThan={'md'}
                styles={{
                    display: 'none'
                }}
            >
                <Grid.Col md={2} lg={3}></Grid.Col>
            </MediaQuery>

            <MediaQuery
                smallerThan={'md'}
                styles={{
                    margin: '0 auto',
                    padding: '0 3rem'
                }}
            >
                <Grid.Col md={6} lg={6}>
                    <Center
                        style={{
                            // width: '90%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            margin: "0 auto",
                        }}
                    >
                        <article>
                            <div dangerouslySetInnerHTML={{ __html: contentWithId }} />
                        </article>
                    </Center>
                </Grid.Col>
            </MediaQuery>

            <MediaQuery
                smallerThan={'md'}
                styles={{ display: 'none' }}
            >
                <Grid.Col md={2} lg={3}>
                    {contentHeader && <TableOfContents links={contentHeader} />}
                </Grid.Col>
            </MediaQuery>

        </Grid>
    )

    return (
        <Layout title={post.title}>
            <Container
                size={'xl'}
                style={{
                    // maxWidth: '100vw',
                    height: '100%',
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
