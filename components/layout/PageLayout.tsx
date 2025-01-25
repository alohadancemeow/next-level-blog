"use client";

import { Container, Center, Stack } from "@mantine/core";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Center
        style={{
          width: "100%",
          // height: '100vh',
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          // border: '1px solid red'
        }}
      >
        <Stack style={{ margin: "0 2rem", width: "100%" }}>{children}</Stack>
      </Center>
    </Container>
  );
};

export default PageLayout;
