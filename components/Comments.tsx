import React, { useEffect, useState } from 'react'
import Giscus from '@giscus/react';
import { ColorScheme, useMantineColorScheme } from '@mantine/core';


type Props = {}

const Comments = (props: Props) => {

    const { colorScheme } = useMantineColorScheme();
    const [theme, setTheme] = useState<ColorScheme>()

    useEffect(() => {
        colorScheme && setTheme(colorScheme)
    }, [colorScheme])

    return (
        <Giscus
            id="comments"
            repo={`${process.env.NEXT_PUBLIC_GITHUB_NAME!}/${process.env.NEXT_PUBLIC_REPO!}`}
            repoId={process.env.NEXT_PUBLIC_REPO_ID!}
            category="Announcements"
            categoryId={process.env.NEXT_PUBLIC_CATEGORY_ID!}
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme === 'dark' ? 'transparent_dark' : 'light'}
            lang="en"
            loading="lazy"
        />
    )
}

export default Comments