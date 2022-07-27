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
                    fontFamily: ["'JetBrains Mono', monospace", "'Noto Sans Thai', sans-serif", "'Space Mono' monospace"],
                    fontSize: '18px',
                    overflowX: 'hidden'
                },
                code: {
                    fontFamily: 'JetBrains Mono',
                    fontSize: '15px',
                    lineHeight: '1.5rem',
                },
                'p, ul, li': {
                    fontFamily: "Space Mono",
                    // fontSize: '18px',
                },
                a: {
                    fontFamily: 'JetBrains Mono',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.7)
                            : theme.colors[theme.primaryColor][5],
                },
                div: {
                    fontFamily: "'JetBrains Mono', monospace",
                },
                blockquote: {
                    margin: '0',
                    padding: '0 15px',
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.fn.rgba(theme.colors[theme.primaryColor][1], 0.7)
                            : theme.colors[theme.black],
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                    borderLeft: `2px solid ${theme.colors[theme.primaryColor][7]}`
                },
                strong: {
                    fontWeight: '600',
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.7)
                            : theme.colors[theme.primaryColor][5],
                },
                em: {
                    color:
                        theme.colorScheme === 'light'
                            ? theme.colors.dark[2]
                            : theme.colors[theme.primaryColor][3],
                }

            })}
        />
    );
}

export default GlobalStyles