import { SpotlightProvider } from '@mantine/spotlight';
import { Post } from 'contentlayer/generated';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode,
    data: Post[]
}

const Spotlight = ({ children, data }: Props) => {
    // console.log('data', data);

    return (
        <SpotlightProvider
            actions={
                data.map(post => ({
                    id: post._id,
                    title: post.title,
                    description: post.description,
                    onTrigger: () => { },
                    new: false,
                }))
            }
            searchPlaceholder="Search for posts..."
            shortcut="mod + S"
        >
            {children}
        </SpotlightProvider>
    );
}

export default Spotlight