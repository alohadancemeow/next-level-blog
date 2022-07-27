import React from 'react'
import { Divider, UnstyledButton, Box, Kbd } from '@mantine/core'
import { Search } from 'tabler-icons-react';
import { openSpotlight } from '@mantine/spotlight'


type Props = {}

const SearchPost = (props: Props) => {
    return (
        <Divider
            // size="sm"
            my="xs"
            variant="solid"
            labelPosition="center"
            label={
                <UnstyledButton
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // fontWeight: '500'
                    }}
                    onClick={() => openSpotlight()}
                >
                    <Search size={28} />
                    <Box ml={5} mr={10}>Search</Box>
                    <Kbd>⌘</Kbd>
                    <span style={{ margin: '0 5px' }}>+</span>
                    <Kbd>S</Kbd>
                    <span style={{ margin: '0 10px' }}>/</span>
                    <Kbd>Ctrl</Kbd>
                    <span style={{ margin: '0 5px' }}>+</span>
                    <Kbd>S</Kbd>
                </UnstyledButton>
            }
        />
    )
}

export default SearchPost