import React from 'react'
import NextImage from 'next/image'
import Link from 'next/link';
import { Container, Text, UnstyledButton, Divider, Grid, Space, Stack, Title, Box, Center, Kbd, ColorScheme, useMantineColorScheme } from '@mantine/core';

type Props = {}

const HomePage: React.FC = (props: Props) => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
                <Stack style={{ margin: '0 auto', paddingLeft: '10px' }}>
                    <Box>
                        <NextImage
                            layout='fixed'
                            src="/image3.gif"
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
                        <Text color="gray">Hi there! 👋 I&apos;m Hai [はい] aka : alohadancemeow ✌️</Text>
                    </Box>

                    <Divider my="xs" variant="solid" />
                    <Space h="sm" />

                    <Box style={{ width: '70%' }}>
                        <Grid grow>
                            <Grid.Col span={6}>
                                <Link href="/" passHref>
                                    <UnstyledButton component='a'>📌 About Me</UnstyledButton>
                                </Link>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Link href="/posts" passHref>
                                    <UnstyledButton component='a'>📖 Posts</UnstyledButton>
                                </Link>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Link href="/" passHref>
                                    <UnstyledButton component='a'>📚 Projects</UnstyledButton>
                                </Link>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Link href="/notes" passHref>
                                    <UnstyledButton component='a'>📝 Notes</UnstyledButton>
                                </Link>
                            </Grid.Col>
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
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    // fontWeight: '500'
                                }}
                                onClick={() => toggleColorScheme()}
                            >
                                <span style={{ fontSize: '20px' }}>
                                    {colorScheme === 'dark' ? '🌙' : '🌤️'}
                                </span>
                                <Box ml={5} mr={10}>Switch Mode</Box>
                                <Kbd>⌘</Kbd>
                                <span style={{ margin: '0 5px' }}>+</span>
                                <Kbd>D</Kbd>
                                <span style={{ margin: '0 10px' }}>/</span>
                                <Kbd>Ctrl</Kbd>
                                <span style={{ margin: '0 5px' }}>+</span>
                                <Kbd>D</Kbd>
                            </UnstyledButton>
                        }
                    />
                </Stack>
            </Center>
        </Container>
    )
}

export default HomePage