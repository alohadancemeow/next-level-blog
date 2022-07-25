import Link from 'next/link'
import React from 'react'

import { Box } from '@mantine/core'
import { useState } from 'react'
import { useEffect } from 'react'

type Props = {
    tags: string[]
}

const Tags = ({ tags }: Props) => {

    const [postTags, setPostTags] = useState<string[]>()

    useEffect(() => {
        if (tags) setPostTags(tags)
    }, [tags])

    return (
        <Box
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 5,
                alignItems: 'center',
                marginTop: '15px',
                fontSize: '12px',
            }}
        >
            {postTags && postTags.map((tag, idx) => (
                <div key={idx}>
                    <Link href={`/tags/${tag.split(' ').join('-')}`}>
                        <a style={{
                            textDecoration: 'none',
                            color: 'grey',
                        }}
                        >
                            {`#${tag}`}
                        </a>
                    </Link>
                </div>
            ))}
        </Box>
    )
}

export default Tags