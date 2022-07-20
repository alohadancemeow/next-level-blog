import type { NextPage } from 'next'
import Link from 'next/link';
import { Container, Text, UnstyledButton, Divider, Grid, Space, Stack, Title, Box, Center, Image } from '@mantine/core';
import NextImage from 'next/image'

const Home: NextPage = () => {
  return (
    <Container>
      <Center
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'

        }} >
        <Stack style={{ margin: '0 auto' }}>
          <Box>
            <NextImage
              layout='fixed'
              src="/image.jpg"
              alt="image"
              width={200}
              height={200}

              style={{
                borderRadius: '100px',
              }}
            />
          </Box>

          <Box>
            <Title order={1}>Personal Home</Title>
            <Space h="xs" />
            <Text color="gray">Hi there! 👋 I'm Hai [はい] aka : alohadancemeow ✌️</Text>
          </Box>

          <Divider my="xs" variant="dotted" />
          <Space h="sm" />

          <Box style={{ width: '70%' }}>
            <Grid grow>
              <Grid.Col span={6}>
                <Link href="/" passHref>
                  <UnstyledButton component='a'>📌 About Me</UnstyledButton>
                </Link>
              </Grid.Col>
              <Grid.Col span={6}>
                <Link href="/articles" passHref>
                  <UnstyledButton component='a'>📖 Articles</UnstyledButton>
                </Link>
              </Grid.Col>
              <Grid.Col span={6}>
                <Link href="/" passHref>
                  <UnstyledButton component='a'>✏️ Reviews</UnstyledButton>
                </Link>
              </Grid.Col>
              <Grid.Col span={6}>
                <Link href="/" passHref>
                  <UnstyledButton component='a'>📝 Notes</UnstyledButton>
                </Link>
              </Grid.Col>
            </Grid>
          </Box>

        </Stack>
      </Center>
    </Container>
  )
}

export default Home
