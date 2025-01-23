"use client";

import classes from "./404.module.css";
import { Container, Title, Text, Button, Group, rem } from "@mantine/core";
import { Illustration } from "./404-Image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nothing to see here</Title>
          <Text
            color="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </Text>
          <Group justify="center">
            <Button
              size="md"
              variant="light"
              color="orange"
              onClick={() => router.push("/")}
            >
              Take me back to home page
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
