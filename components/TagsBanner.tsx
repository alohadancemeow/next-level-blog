import Link from 'next/link'
import React from 'react'
import { Box } from '@mantine/core'

const Tags = ({ ...tags }: { [key: string]: number }) => {
    // console.log(tags);

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
        }}>
            {Object.keys(tags).map((tag, i) => (
                <Box
                    key={i}
                    style={{
                        // backgroundColor: 'grey',
                        border: '1px solid grey',
                        borderRadius: '3px',
                        padding: '2px 5px',
                    }}
                    sx={(theme) => ({
                        [theme.fn.smallerThan('md')]: { fontSize: '15px' },
                    })}
                >
                    <Link href={`/tags/${tag.split(" ").join("-")}`}>
                        <a style={{
                            textDecoration: 'none',
                            color: 'grey',
                            fontWeight: 'bold'
                        }}>
                            <span>{`#${tag}`}</span>{""}
                            <span>({tags[tag]})</span>
                        </a>
                    </Link>
                </Box>
            ))}
        </div>
    )
}

export default Tags