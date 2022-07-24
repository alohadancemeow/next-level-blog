import { Global } from '@mantine/core';

const GlobalStyles = () => {
    return (
        <Global
            styles={(theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },

                body: {
                    ...theme.fn.fontStyles(),
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                    lineHeight: theme.lineHeight,
                    padding: 0,
                    margin: 0,
                    fontFamily: ["'JetBrains Mono', monospace"],
                    fontSize: '18px',
                },
                code: {
                    fontFamily: 'JetBrains Mono',
                    fontSize: '15px',
                    lineHeight: '1.5rem'
                },
                p: {
                    fontFamily: 'Space Mono',
                    fontSize: '18px'
                },
                a: {
                    textDecoration: 'none',
                    // color: 'inherit'
                }
            })}
        />
    );
}

export default GlobalStyles