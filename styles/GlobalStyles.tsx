import { Global } from "@mantine/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        },

        body: {
          ...theme.fn.fontStyles(),
          backgroundColor:
            // theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          // lineHeight: theme.lineHeight,
          padding: 0,
          margin: 0,
          lineHeight: 1.75,
          fontFamily: "'JetBrains Mono', 'Bai Jamjuree'",
          fontWeight: "400",
          fontSize: "16px",
          overflowX: "hidden",
        },
        div: {
          fontFamily: "'JetBrains Mono', 'Bai Jamjuree'",
        },
        code: {
          fontFamily: "JetBrains Mono",
          fontSize: "14px",
          padding: "4px",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.gray[9]
              : theme.colors.gray[1],
        },
        ul: {
          marginBottom: "16px",
          paddingLeft: "24px",
          listStyle: "square",
        },
        li: {
          fontSize: "16px",
          marginBottom: "4px",
        },
        p: {
          marginBottom: "16px",
        },
        a: {
          cursor: "pointer",
          textDecoration: "none",
          color:
            theme.colorScheme === "dark"
              ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.7)
              : theme.colors[theme.primaryColor][5],
        },
        blockquote: {
          margin: "10px",
          padding: "0 15px",
          // color:
          //   theme.colorScheme === "dark"
          //     ? theme.fn.rgba(theme.colors[theme.primaryColor][1], 0.7)
          //     : theme.colors[theme.black],
          color:
            theme.colorScheme === "light"
              ? theme.colors[theme.primaryColor][4]
              : theme.colors[theme.primaryColor][6],
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          borderLeft: `4px solid ${theme.colors[theme.primaryColor][7]}`,

          "&>div": {
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors[theme.primaryColor][3],
          },
        },
        em: {
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[2]
              : theme.colors[theme.primaryColor][3],
        },

        strong: {
          fontWeight: 600,
          color:
            theme.colorScheme === "dark"
              ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.7)
              : theme.colors[theme.primaryColor][5],
        },

        // "h2,h3": {
        //   a: {
        //     ":before": {
        //       content: '"#"',
        //       float: "left",
        //       paddingRight: "8px",
        //       marginLeft: "-20px",
        //       visibility: "hidden",
        //     },
        //   },
        //   "&:hover a:before": {
        //     visibility: "visible",
        //   },
        // },
      })}
    />
  );
};

export default GlobalStyles;
