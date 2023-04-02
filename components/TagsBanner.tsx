import React from "react";
import { Box } from "@mantine/core";

import { Tags } from "pages/posts";

type Props = {
  tags: Tags;
  setFilteredByTag: React.Dispatch<React.SetStateAction<Tags>>;
  filteredByTag: Tags;
};

const Tags = ({ tags, setFilteredByTag, filteredByTag }: Props) => {
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
            // color: theme.colors.gray[6],

            color:
              Object.keys(filteredByTag)[0] === tag
                ? theme.colors[theme.primaryColor][3]
                : theme.colors.gray[6],

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
        </Box>
      ))}
    </div>
  );
};

export default Tags;
