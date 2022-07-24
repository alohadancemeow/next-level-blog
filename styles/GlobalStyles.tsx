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
                    overflowX: 'hidden'
                },
                code: {
                    fontFamily: 'JetBrains Mono',
                    fontSize: '15px',
                    lineHeight: '1.5rem',
                },
                p: {
                    fontFamily: 'Space Mono',
                    fontSize: '18px'
                },
                a: {
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.7)
                            : theme.colors[theme.primaryColor][5],
                },
                div: {
                    fontFamily: 'JetBrains Mono',
                }

            })}
        />
    );
}

export default GlobalStyles