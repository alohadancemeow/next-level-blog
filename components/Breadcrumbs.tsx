import React from 'react'
import { Breadcrumbs as MantineBreadcrumbs, Anchor, Center } from '@mantine/core';
import Link from 'next/link'

type Props = {}

const items = [
    { title: 'HOME', href: '/' },
    { title: 'POSTS', href: '/posts' },
    // { title: 'use-id', href: '#' },
].map((item, index) => (
    <Link href={item.href} key={index}>
        <Anchor>
            {item.title}
        </Anchor>
    </Link>
));


const Breadcrumbs = (props: Props) => {
    return (
        <Center>
            <MantineBreadcrumbs>{items}</MantineBreadcrumbs>
        </Center>
    )
}

export default Breadcrumbs