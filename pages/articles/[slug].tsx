import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Container, Space, Stack, Center, Title, Grid } from '@mantine/core';
import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from '../../components/TableOfContents'

import { unified } from "unified";
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import parameterize from 'parameterize';

type ContentHeader = {
    label: string
    link: string
    order: number
}

const PostLayout = ({ post }: { post: Post }) => {
    // console.log(post);

    const contentHeader: ContentHeader[] = []
    console.log('contentHeader', contentHeader);


    // read post elements
    const content = unified()
        .use(rehypeParse, {
            fragment: true,
        })
        .use(() => {
            return (tree) => {
                // console.log('tree', tree)
                visit(tree, 'element', (node) => {

                    if (['h1', 'h2', 'h3'].includes(node.tagName)) {
                        console.log('node', node);
                        const id = parameterize(node.children[0].value)
                        node.properties!.id = id

                        contentHeader.push({
                            label: id,
                            link: `#${id}`,
                            order: 1
                        })
                    }
                })
            }
        })
        .use(rehypeStringify)
        .processSync(post.body.html)
        .toString()

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
                                        dangerouslySetInnerHTML={{ __html: content }}
                                    />
                                </article>
                            </Stack>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={2} lg={2} xl={3}>
                        <TableOfContents links={contentHeader} />
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
