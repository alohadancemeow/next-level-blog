import { useMDXComponent } from "next-contentlayer/hooks";
import { Props } from "pages/posts/[slug]";
import React, { useEffect, useState } from "react";

import CodeBox from "components/Post/Code";
import { CSSIcon, JsIcon, TsIcon, NpmIcon } from "components/Post/SvgIcons";

import { Prism } from "@mantine/prism";
import { Space, Grid, Image, AspectRatio, Text, Box } from "@mantine/core";
import TableOfContents from "components/TableOfContents";
import MorePost from "components/MorePost";
import Comments from "./Comments";
import { siteMetadata } from "site/siteMatedata";
import Share from "components/Share";
import Link from "next/link";

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
};

type ContentHeader = {
  label: string;
  link: string;
  order: number;
};

const ContentBody: React.FC<Props> = React.memo(({ post, matchedPosts }) => {
  const MDXContent = useMDXComponent(post.body.code);

  // get element's headings
  const [headings, setHeadings] = useState<ContentHeader[]>();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2,h3"))
      .filter((el) => el.id)
      .map((el) => ({
        label: el.textContent || "",
        link: el.id,
        order: Number(el.tagName.substring(1)) - 1,
      }));
    setHeadings(elements);
  }, []);

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Grid gutter={50}>
        <Grid.Col
          lg={3}
          sx={(theme) => ({
            [theme.fn.smallerThan("lg")]: { display: "none" },
          })}
        >
          {post && (
            <Share postLink={(siteMetadata.siteAddress + post.url) as string} />
          )}
        </Grid.Col>

        <Grid.Col
          md={8}
          lg={6}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: { padding: "0 6rem" },
            [theme.fn.smallerThan("xs")]: {
              padding: "0 2.5rem",
              fontSize: "15px",
            },
          })}
        >
          <article>
            <MDXContent components={myMdxComponents} />
          </article>
          <Space h={"xl"} />
          {/* # Note More post */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text> More in : </Text>
            {post.tags.map((tag, i) => (
              <Link
                key={i}
                href={`/tags/${tag.split(" ").join("-")}`}
                legacyBehavior
              >
                <Text
                  component="a"
                  sx={{
                    textDecoration: "none",
                    // color: "grey",
                    paddingInlineStart: "8px",
                  }}
                >
                  {`#${tag}`}
                </Text>
              </Link>
            ))}
          </Box>

          <Grid gutter="sm">
            {matchedPosts.map((post) => (
              <Grid.Col key={post._id} xs={6} md={4}>
                <MorePost {...post} />
              </Grid.Col>
            ))}
          </Grid>

          <Space h={"xl"} />
          <Space h={"xl"} />
          <Space h={"xl"} />
          <Comments />
        </Grid.Col>

        <Grid.Col
          md={4}
          lg={3}
          sx={(theme) => ({
            [theme.fn.smallerThan("md")]: { display: "none" },
          })}
        >
          {headings && <TableOfContents links={headings} />}
        </Grid.Col>
      </Grid>
    </div>
  );
});

export default ContentBody;
