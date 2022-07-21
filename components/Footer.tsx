import React from 'react'
import { Container, Center, Text } from '@mantine/core'


type Props = {}

const Footer = (props: Props) => {
    return (
        <Container size={'xl'} style={{ margin: '2rem 0' }}>
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
        </Container>
    )
}

export default Footer