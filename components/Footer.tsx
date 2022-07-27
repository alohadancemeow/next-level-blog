import React from 'react'
import { Center, Text } from '@mantine/core'


type Props = {}

const Footer = (props: Props) => {
    return (
        <div style={{ margin: '2rem 0' }}>
            <Center style={{ fontWeight: '500', gap: '5px' }}>
                <Text>Made with 🧡 </Text>
                <Text
                    component='a'
                    href='https://github.com/alohadancemeow'
                    target={'_blank'}
                    referrerPolicy='no-referrer'
                >
                    alohadancemeow
                </Text>
            </Center>
        </div>
    )
}

export default Footer