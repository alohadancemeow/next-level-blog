"use client";

import { Container, Title, Text, Button, Group, Center } from "@mantine/core";
import { Illustration } from "./503-Image";
import classes from "./503.module.css";

type Props = {
  reset: () => void;
};

const ServerErrorPage = ({ reset }: Props) => {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <Illustration className={classes.image} />
          <div className={classes.content}>
            <Center>
              <Title className={classes.title}>
                All of our servers are busy
              </Title>
            </Center>
            <Text
              size="lg"
              ta="center"
              className={classes.description}
              color="dimmed"
            >
              We cannot handle your request right now, please wait for a couple
              of minutes and refresh the page. Our team is already working on
              this issue.
            </Text>
            <Group justify="center">
              <Button
                size="md"
                variant="light"
                color="orange"
                onClick={() => reset()}
              >
                Refresh the page
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServerErrorPage;
