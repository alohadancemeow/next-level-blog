"use client";

import { Timeline } from "@mantine/core";
import { Books, SignRight } from "tabler-icons-react";
import EndSection from "./end-section";
import PostGrid from "./post-grid";

import { PageDataSchemaType } from "@/types";
import { getCategory } from "@/helpers/get-unique-category";

type Props = {
  posts: PageDataSchemaType[];
};

const TimelineContent = ({ posts }: Props) => {
  const categories = getCategory(posts);

  return (
    <>
      <Timeline bulletSize={24} lineWidth={2} style={{ padding: "0" }}>
        {/* --- TODOY-I-LEARNED --- */}
        <Timeline.Item
          bullet={<Books size={16} />}
          title={categories[0].toUpperCase()}
        >
          <PostGrid
            categoryName={categories[0]}
            description="Sharing tidbits of wisdom I picked up today, maybe something you'll find useful too."
          />
        </Timeline.Item>

        {/* --- I-READ-A-LOT --- */}
        <Timeline.Item
          bullet={<Books size={16} />}
          title={categories[1].toUpperCase()}
        >
          <PostGrid
            categoryName={categories[1]}
            description="Diving into the books I've devoured lately, sharing the highlights and insights."
          />
        </Timeline.Item>

        {/* --- NO-WORK-TODAY --- */}
        <Timeline.Item
          bullet={<Books size={16} />}
          title={categories[2].toUpperCase()}
        >
          <PostGrid
            categoryName={categories[2]}
            description="Recommending random entertainment gems – movies, anime, manga, and all things fun for a day off."
          />
        </Timeline.Item>

        <Timeline.Item
          title="END OF CONTENT"
          bullet={<SignRight size={16} />}
          //   lineVariant="dashed"
        >
          <EndSection posts={posts} />
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default TimelineContent;
