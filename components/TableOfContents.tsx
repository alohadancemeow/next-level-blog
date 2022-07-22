import React, { useState } from 'react';
import { createStyles, Box, Text, Group } from '@mantine/core';
import { ListSearch } from 'tabler-icons-react';

// const LINK_HEIGHT = 38;
// const INDICATOR_SIZE = 10;
// const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2;

// const useStyles = createStyles((theme) => ({
//     link: {
//         ...theme.fn.focusStyles(),
//         display: 'block',
//         textDecoration: 'none',
//         color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
//         lineHeight: `${LINK_HEIGHT}px`,
//         fontSize: theme.fontSizes.sm,
//         height: LINK_HEIGHT,
//         borderTopRightRadius: theme.radius.sm,
//         borderBottomRightRadius: theme.radius.sm,
//         borderLeft: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
//             }`,

//         '&:hover': {
//             backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
//         },
//     },

//     linkActive: {
//         fontWeight: 500,
//         color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
//     },

//     links: {
//         position: 'relative',
//     },

//     indicator: {
//         transition: 'transform 150ms ease',
//         border: `2px solid ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7]}`,
//         backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
//         height: INDICATOR_SIZE,
//         width: INDICATOR_SIZE,
//         borderRadius: INDICATOR_SIZE,
//         position: 'absolute',
//         left: -INDICATOR_SIZE / 2 + 1,
//     },
// }));

// # styles 02
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
        <Box<'a'>
            component="a"
            href={item.link}
            onClick={(event) => {
                // event.preventDefault();
                setActive(index);
            }}
            key={item.label}
            className={cx(classes.link, { [classes.linkActive]: active === index })}
            sx={(theme) => ({ paddingLeft: item.order * theme.spacing.lg })}
        >
            {item.label}
        </Box>
    ));

    return (
        // <div
        //     style={{
        //         position: 'sticky',
        //         top: '5%',
        //         right: 0,
        //         margin: '10px',
        //     }}
        // >
        //     <Group mb="md">
        //         <ListSearch size={18} />
        //         <Text>Table of contents</Text>
        //     </Group>
        //     <div className={classes.links}>
        //         <div
        //             className={classes.indicator}
        //             style={{ transform: `translateY(${active * LINK_HEIGHT + INDICATOR_OFFSET}px)` }}
        //         />
        //         {items}
        //     </div>
        // </div>

        <div
            style={{
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