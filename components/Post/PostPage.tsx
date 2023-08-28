"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import Layout from "@/components//layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import ContentTitle from "@/components/Post/ContentTitle";
import ContentBody from "@/components/Post/ContentBody";
import { ContentHeader } from "@/types";

type Props = {
  post: any;
  matchedPosts: any[];
};

const PostLayout = ({ post, matchedPosts }: Props) => {
  const router = useRouter();

  // get element's headings,
  // every time when post changed
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
  }, [post]);

  return <div>post page</div>;
};

export default PostLayout;
