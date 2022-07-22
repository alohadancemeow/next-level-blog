import Link from 'next/link'
import React from 'react'

import { Title, Container, Center } from '@mantine/core'

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
            <Title
                style={{ backgroundColor: 'orange', padding: '5px 10px' }}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { fontSize: '25px' },
                    [theme.fn.smallerThan('xs')]: { fontSize: '12px' },
                })}
            >
                {title}
            </Title>
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