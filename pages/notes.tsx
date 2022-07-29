import React from 'react'

import Menu from 'components/Menu';
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'

import { Container, Box, Divider, Kbd, Space } from '@mantine/core'

type Props = {}

const notes = (props: Props) => {
    return (
        <Layout title='Notes'>
            <PageLayout>
                <Menu title='alohadancemeow notes' />
                <Space h={'lg'} />
                <Container size={'lg'}>
                    <ul>
                        <li>
                            <Box sx={(theme) => ({
                                [theme.fn.smallerThan('xs')]: { fontSize: '15px' },
                            })}
                            >
                                <span> 🌤️ Switch Mode (Global) :</span>
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
                                <span>🪶 Search for posts (Only allowed in posts/tags page) :</span>
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
                    </ul>
                </Container>
                <Space h={'lg'} />
            </PageLayout>
        </Layout>
    )
}

export default notes