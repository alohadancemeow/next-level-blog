import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

import { Prism } from '@mantine/prism';
import { Container, Space, Center, Grid, Image } from '@mantine/core';

import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from 'components/TableOfContents'
import Header from "components/Header";

import { useEffect, useState } from "react";
import { ContentHeader } from '../../lib/getTableOfContents'

import { useMDXComponent } from 'next-contentlayer/hooks'
import CodeBox from 'components/Post/Code'
import { CSSIcon, JsIcon, TsIcon } from '../../components/Post/SvgIcons'

const myMdxComponents = {
    CodeBox,
    Space,
    Prism,
    Image,
    CSSIcon,
    JsIcon,
    TsIcon,
}

const PostLayout = ({ post }: { post: Post }) => {

    const MDXContent = useMDXComponent(post.body.code)

    // new way to get element's headings
    const [headings, setHeadings] = useState<ContentHeader[]>()

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('h2,h3'))
            .filter(el => el.id)
            .map(el => ({
                label: el.textContent || '',
                link: el.id,
                order: Number(el.tagName.substring(1)) - 1
            }))
        setHeadings(elements)
    }, [])


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
            <Header title={post.title} />
            <Tags tags={post.tags} />
            <Space h="xs" />
        </Center>
    )

    // Body of contents
    const ContentBody = () => (
        <Grid gutter={'xl'}>

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
                    <MDXContent components={myMdxComponents} />
                </article>
            </Grid.Col>

            <Grid.Col md={2} lg={3}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { display: 'none' },
                })}
            >
                {headings && <TableOfContents links={headings} />}
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
