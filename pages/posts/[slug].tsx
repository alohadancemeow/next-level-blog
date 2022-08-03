import { GetStaticPaths, GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useEffect, useState } from "react";
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ContentHeader } from 'lib/getTableOfContents'

import { Prism } from '@mantine/prism';
import { Space, Center, Grid, Image } from '@mantine/core';

import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from 'components/TableOfContents'
import Header from "components/Header";
import CodeBox from 'components/Post/Code'
import { CSSIcon, JsIcon, TsIcon, NpmIcon } from 'components/Post/SvgIcons'

import Comments from "components/Comments";

const myMdxComponents = {
    CodeBox,
    Space,
    Prism,
    Image,
    CSSIcon,
    JsIcon,
    TsIcon,
    NpmIcon,
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
        <div
            style={{
                width: '90%',
                margin: '0 auto',
            }}
        >
            <Grid gutter={50}>
                <Grid.Col lg={3}
                    sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: { display: 'none' },
                    })}
                />

                <Grid.Col md={8} lg={6}
                    sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: { padding: '0 6rem' },
                        [theme.fn.smallerThan('xs')]: { padding: '0 2.5rem', fontSize: '15px' },
                    })}
                >
                    <article>
                        <MDXContent components={myMdxComponents} />
                    </article>

                    <Space h={'xl'} />
                    <Space h={'xl'} />
                    <Comments />

                </Grid.Col>

                <Grid.Col md={4} lg={3}
                    sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: { display: 'none' },
                    })}
                >
                    {headings && <TableOfContents links={headings} />}
                </Grid.Col>
            </Grid>
        </div>
    )


    return (
        <Layout title={post.title}>
            <div
                style={{
                    height: '100%',
                    padding: '0'
                }}
            >
                <ContentTitle />
                <ContentBody />

            </div>
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
