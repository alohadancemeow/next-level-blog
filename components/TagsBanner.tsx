import React from "react";
import Link from "next/link";
import { Box } from "@mantine/core";

import { Tags } from "pages/posts";

type Props = {
  tags: Tags;
  setFilteredByTag: React.Dispatch<React.SetStateAction<Tags>>;
};

const Tags = ({ tags, setFilteredByTag }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3px 10px",
        // justifyContent: 'center',
      }}
    >
      {Object.keys(tags).map((tag, i) => (
        // <Link
        // key={i}
        //  href={`/tags/${tag.split(" ").join("-")}`}
        //  >
        <Box
          key={i}
          component="a"
          style={{
            // padding: '2px 5px',
            fontWeight: "500",
            fontSize: "15px",
          }}
          sx={(theme) => ({
            // [theme.fn.largerThan('xl')]: { fontSize: '18px' },
            // [theme.fn.smallerThan('xl')]: { fontSize: '16px' },
            // [theme.fn.smallerThan('md')]: { fontSize: '15px' },
            color: theme.colors.gray[6],

            "&:hover": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors[theme.primaryColor][3]
                  : theme.black,
            },
          })}
          onClick={() => setFilteredByTag({ [tag]: tags[tag] })}
        >
          <span>{`#${tag}`}</span>
          {""}
          {/* <span>({tags[tag]})</span> */}
        </Box>
        // </Link>
      ))}
    </div>
  );
};

export default Tags;
