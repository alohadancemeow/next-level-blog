import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Box } from '@mantine/core'

import Logo from './Logo'
import Footer from './Footer'
import ThemeMode from './ThemeMode'

type Props = {
    children: ReactNode,
    title: string
}

const Layout = ({ children, title }: Props) => {
    return (
        <div>
            <Head>
                <title>{`${title} | alohadancemeow`}</title>
            </Head>
            <div
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
                    <Logo />
                    <ThemeMode />
                    {children}
                </Box>
                <Footer />
            </div>
        </div>
    )
}

export default Layout