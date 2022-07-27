import Link from 'next/link'
import React from 'react'

import { Title, Container, Center } from '@mantine/core'
import Header from './Header'

type Props = {
    title: string
}

const Menu = ({ title }: Props) => {
    return (
        <Container
            style={{
                marginTop: '-10px',
                marginBottom: '5px'
            }}
        >
            <Header title={title} />

            {/* <Center style={{ gap: 5, margin: '10px' }}>
                <Link href="/">
                    <a style={{ textDecoration: 'none', color: '#000' }}>Home</a>
                </Link>
                <Link href="/tags">
                    <a style={{ textDecoration: 'none', color: '#000' }}>Tags</a>
                </Link>
            </Center> */}

        </Container>
    )
}

export default Menu