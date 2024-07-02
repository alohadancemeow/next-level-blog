"use client";

// import NextImage from "next/image";
import Link from "next/link";
import {
  Container,
  Text,
  UnstyledButton,
  Divider,
  Grid,
  Space,
  Stack,
  Title,
  Box,
  Center,
  Kbd,
  useMantineColorScheme,
} from "@mantine/core";

import { Navigations } from "@/site/data";

type Props = {};

const HomePage: React.FC = (props: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Container>
      <Center
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Stack style={{ margin: "0 auto", paddingLeft: "10px" }}>
          <Box>
            {/* <NextImage
              // layout="fixed"
              priority={true}
              src="/image3.gif"
              alt="image"
              width={200}
              height={200}
              style={{
                borderRadius: "100px",
              }}
            /> */}

            <img
              src="/image3.gif"
              alt="profile-image"
              className="rounded-full w-48 h-48"
            />
          </Box>

          <Box>
            <Title order={1}>Personal Home</Title>
            <Space h="xs" />
            <Text
            //  color="gray"
            >
              Hi there! 👋 I&apos;m Hai [はい] aka : alohadancemeow ✌️
            </Text>
          </Box>

          <Divider my="xs" variant="solid" />
          <Space h="sm" />

          <Box style={{ width: "70%" }}>
            <Grid grow>
              {Navigations.map(({ name, href, id }) => (
                <Grid.Col span={6} key={id}>
                  <Link href={href} passHref legacyBehavior>
                    <UnstyledButton component="a">{name}</UnstyledButton>
                  </Link>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          <Space h="sm" />

          <Divider
            my="lg"
            variant="solid"
            labelPosition="left"
            label={
              <UnstyledButton
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // fontWeight: '500'
                }}
                onClick={() => toggleColorScheme()}
              >
                <span style={{ fontSize: "20px" }}>
                  {colorScheme === "dark" ? "🌙" : "🌤️"}
                </span>
                <Box ml={5} mr={10}>
                  Switch Mode
                </Box>
                <Kbd>⌘</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>D</Kbd>
                <span style={{ margin: "0 10px" }}>/</span>
                <Kbd>Ctrl</Kbd>
                <span style={{ margin: "0 5px" }}>+</span>
                <Kbd>D</Kbd>
              </UnstyledButton>
            }
          />
        </Stack>
      </Center>
    </Container>
  );
};

export default HomePage;
