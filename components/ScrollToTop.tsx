import React from 'react'
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';

type Props = {}

const ScrollToTop = (props: Props) => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Affix
                position={{ bottom: 20, right: 100 }}
                sx={(theme) => ({
                    [theme.fn.smallerThan('md')]: { display: 'none' },

                })}
            >
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={'🍉'}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === 'dark'
                                        ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
                                        : theme.colors[theme.primaryColor][5],
                            })}
                        >
                            Back to top
                        </Button>
                    )}
                </Transition>
            </Affix>
        </>
    )
}

export default ScrollToTop