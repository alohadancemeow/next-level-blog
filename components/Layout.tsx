import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Container, Box } from '@mantine/core'

import Header from './Header'
import Footer from './Footer'

type Props = {
    children: ReactNode,
    title: string
}

const Layout = ({ children, title }: Props) => {
    return (
        <div style={{
            height: '100vh',
        }}>
            <Head>
                <title>{`alohadancemeow | ${title}`}</title>
            </Head>
            <Container size={'xl'}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '0px'
                }}
            >
                <Box>
                    <Header />
                    {children}
                </Box>
                <Footer />
            </Container>
        </div>
    )
}

export default Layout