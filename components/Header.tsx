import React from 'react'
import { Title } from '@mantine/core'

type Props = {
    title: string
}

const Header = ({ title }: Props) => {
    return (
        <Title
            style={{ padding: '5px 10px' }}
            sx={(theme) => ({
                [theme.fn.smallerThan('md')]: { fontSize: '25px' },
                [theme.fn.smallerThan('xs')]: { fontSize: '12px' },
                color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 0],
                backgroundColor:
                    theme.colorScheme === 'dark'
                        ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                        : theme.colors[theme.primaryColor][5],
            })}
        >
            {title}
        </Title>
    )
}

export default Header