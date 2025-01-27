"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Space, Box, Divider } from "@mantine/core";
import { PageDataSchemaType } from "@/types";
import Loader from "../common/Loader";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";

type Props = {
  posts: PageDataSchemaType[];
  postData: PageDataSchemaType;
  children: React.ReactNode;
};

const ContentBody = ({ posts, children, postData }: Props) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="w-full m-auto">
        <div className="mx-auto mb-8">{children}</div>

        <Space h={"xl"} />

        <Box className="flex justify-center items-center gap-2">
          <p> More in : </p>
          {postData.tags.map((tag, i) => (
            <Link key={i} href={`/tags/${tag.name}`} legacyBehavior>
              <span className="decoration-none">{`#${tag.name}`}</span>
            </Link>
          ))}
        </Box>

        <RelatedPosts posts={posts} postData={postData} />
        <Divider className="my-14" />
        <Comments />
      </div>
    </Suspense>
  );
};

export default ContentBody;
