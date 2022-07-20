import Link from 'next/link'
import React from 'react'

type Props = {
    tags: string[]
}

const Tags = ({ tags }: Props) => {
    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                padding: '2px 0',
            }}
        >
            {tags.map((tag, idx) => (
                <div key={idx}>
                    <Link href={`/tags/${tag.split(' ').join('-')}`}>
                        <a style={{
                            textDecoration: 'none',
                            color: 'grey',
                            // fontWeight: 'bold'
                        }}
                        >
                            {`#${tag}`}
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Tags