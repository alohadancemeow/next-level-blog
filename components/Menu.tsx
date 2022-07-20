import Link from 'next/link'
import React from 'react'

import { Title, Container, Center } from '@mantine/core'

type Props = {}

const Menu = (props: Props) => {
    return (
        <Container style={{
            marginTop: '-15px',
            backgroundColor: 'orange'
            }}>
            <Title>alohadancemeow blog</Title>
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