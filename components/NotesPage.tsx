import React from 'react'
import Menu from 'components/Menu';
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'

import { Container, Box, Divider, Kbd, Space, Blockquote } from '@mantine/core'

type Props = {}

const NotesPage = (props: Props) => {
    return (
        <Layout title='Notes'>
            <PageLayout>
                <Menu title='Notes' />
                <Space h={'lg'} />
                <Container size={'sm'}>
                    <ul>
                        <li>
                            <Box sx={(theme) => ({
                                [theme.fn.smallerThan('xs')]: { fontSize: '15px' },
                            })}
                            >
                                <span> 🌤️ Switch Mode (<em>Global</em>) :</span>
                                <Divider
                                    size={'xs'}
                                    variant="solid"
                                    labelPosition={'left'}
                                    label={
                                        <Box style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        >
                                            <Box ml={5} mr={10}>Using</Box>
                                            <Kbd>⌘</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>D</Kbd>
                                            <span style={{ margin: '0 10px' }}>/</span>
                                            <Kbd>Ctrl</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>D</Kbd>
                                        </Box>
                                    }
                                />
                            </Box>

                        </li>
                        <Space h={'lg'} />
                        <li>
                            <Box sx={(theme) => ({
                                [theme.fn.smallerThan('xs')]: { fontSize: '15px' },
                            })}
                            >
                                <span>🪶 Search for posts (<em>Only allowed in posts/tags page</em>) :</span>
                                <Divider
                                    size={'xs'}
                                    variant="solid"
                                    labelPosition={'left'}
                                    label={
                                        <Box style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Box ml={5} mr={10}>Using</Box>
                                            <Kbd>⌘</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>S</Kbd>
                                            <span style={{ margin: '0 10px' }}>/</span>
                                            <Kbd>Ctrl</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>S</Kbd>
                                        </Box>
                                    }
                                />
                            </Box>
                        </li>
                        <Space h={'lg'} />
                        <li>
                            <Box sx={(theme) => ({
                                [theme.fn.smallerThan('xs')]: { fontSize: '15px' },
                            })}
                            >
                                <span>🎵 Play/Stop the music (<em>Global</em>) :</span>
                                <Divider
                                    size={'xs'}
                                    variant="solid"
                                    labelPosition={'left'}
                                    label={
                                        <Box style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Box ml={5} mr={10}>Using</Box>
                                            <Kbd>⌘</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>Shift</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>L</Kbd>
                                            <span style={{ margin: '0 10px' }}>/</span>
                                            <Kbd>Ctrl</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>Shift</Kbd>
                                            <span style={{ margin: '0 5px' }}>+</span>
                                            <Kbd>L</Kbd>
                                        </Box>
                                    }
                                />
                            </Box>
                        </li>
                    </ul>

                    <Space h={'xl'} />
                    <Blockquote
                        cite="– Forrest Gump"
                        color="orange"
                        sx={{ borderLeft: 'none' }}
                    >
                        Life is like an npm install – you never know what you are going to get.
                    </Blockquote>
                    <Space h={'lg'} />

                </Container>
            </PageLayout>
        </Layout>
    )
}

export default NotesPage