import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useEffect, useState } from "react";
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Prism } from '@mantine/prism';
import { Space, Center, Grid, Image, AspectRatio } from '@mantine/core';

import Tags from "components/Tags";
import Layout from "components/Layout";
import TableOfContents from 'components/TableOfContents'
import Header from "components/Header";
import CodeBox from 'components/Post/Code'
import { CSSIcon, JsIcon, TsIcon, NpmIcon } from 'components/Post/SvgIcons'
import Comments from "components/Comments";
import Breadcrumbs from "components/Breadcrumbs";
import ScrollToTop from "components/ScrollToTop";

import { NextSeo } from 'next-seo';
import { siteMetadata } from 'site/siteMatedata';
import { useRouter } from "next/router";

const myMdxComponents = {
    CodeBox,
    Space,
    Prism,
    Image,
    CSSIcon,
    JsIcon,
    TsIcon,
    NpmIcon,
    AspectRatio,
}

type ContentHeader = {
    label: string
    link: string
    order: number
}

const PostLayout: NextPage<{ post: Post }> = ({ post }) => {
    const { asPath } = useRouter()

    return (
        <>
            <NextSeo
                title={`${post.title} | ${siteMetadata.title}`}
                description={post.description}
                canonical={siteMetadata.siteAddress}
                openGraph={{
                    url: `${siteMetadata.siteAddress}${asPath}`,
                    title: `${post.title} | ${siteMetadata.title}`,
                    description: `${post.description}`,
                    site_name: `${siteMetadata.title}`,
                    images: [
                        {
                            url: `${post.image}`,
                            alt: `${post.title} cover-image`,
                            type: 'image/png',
                        },
                    ],
                }}
                twitter={{
                    handle: `${siteMetadata.twitter}`,
                    site: `${siteMetadata.twitter}`,
                    cardType: 'summary_large_image',
                }}
            />

            <Layout title={post.title}>
                <div
                    style={{
                        height: '100%',
                        padding: '0'
                    }}
                >
                    <ContentTitle {...post} />
                    <ContentBody {...post} />
                    <ScrollToTop />

                </div>
            </Layout>
        </>
    );
}

export default PostLayout;

const MemoizedComments = React.memo(Comments)

// # Title of contents
const ContentTitle: React.FC<Post> = React.memo(({ ...post }) => {
    return (
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
            <Breadcrumbs />
            <Space h="xs" />
        </Center>
    )
})


// Body of contents
const ContentBody: React.FC<Post> = React.memo(({ ...post }) => {

    const MDXContent = useMDXComponent(post.body.code)

    // get element's headings
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


    return (
        <div
            style={{
                width: '90%',
                margin: '0 auto',
            }}
        >
            <Grid gutter={50}>
                <Grid.Col lg={3}
                    sx={(theme) => ({
                        [theme.fn.smallerThan('lg')]: { display: 'none' },
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
                    <MemoizedComments />

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
})



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
