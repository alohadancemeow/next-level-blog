import React, { useState } from 'react';
import { createStyles, Box, Text, Group } from '@mantine/core';
import { ListSearch } from 'tabler-icons-react';
import { Link } from 'react-scroll'

const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: 'block',
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: 1.2,
        fontSize: theme.fontSizes.sm,
        padding: theme.spacing.xs,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    linkActive: {
        fontWeight: 500,
        borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                    : theme.colors[theme.primaryColor][0],
        },
    },
}));

interface TableOfContentsFloatingProps {
    links: { label: string; link: string; order: number }[];
}

const TableOfContents = ({ links }: TableOfContentsFloatingProps) => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);

    const items = links.map((item, index) => (
        <Box
            component={Link}
            key={item.label}
            // activeClass={classes.linkActive}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            sx={(theme) => ({ paddingLeft: item.order * theme.spacing.lg })}
            to={item.link}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-50}
            onClick={() => setActive(index)}
            onSetActive={() => setActive(index)}
        >
            {item.label}
        </Box >

    ));

    return (
        <div style={{
            position: 'sticky',
            top: '5%',
            right: 0,
            margin: '15px',
        }}
        >
            <Group mb="md">
                <ListSearch size={18} />
                <Text>Table of contents</Text>
            </Group>
            {items}
        </div >
    );
}

export default TableOfContents