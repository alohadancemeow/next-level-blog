import Link from 'next/link'
import React from 'react'
import { Box } from '@mantine/core'

const Tags = ({ ...tags }: { [key: string]: number }) => {

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3px 10px',
            justifyContent: 'center',
        }}>
            {Object.keys(tags).map((tag, i) => (
                <Link
                    key={i}
                    href={`/tags/${tag.split(" ").join("-")}`}
                >
                    <Box
                        component='a'
                        style={{
                            // padding: '2px 5px',
                            fontWeight: '500',
                        }}
                        sx={(theme) => ({
                            [theme.fn.largerThan('xl')]: { fontSize: '18px' },
                            [theme.fn.smallerThan('xl')]: { fontSize: '16px' },
                            [theme.fn.smallerThan('md')]: { fontSize: '15px' },
                            color: theme.colors.gray[6],

                            '&:hover': {
                                color:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors[theme.primaryColor][3]
                                        : theme.black,
                            }
                        })}
                    >
                        <span>{`#${tag}`}</span>{""}
                        <span>({tags[tag]})</span>
                    </Box>
                </Link>
            ))}
        </div>
    )
}

export default Tags