import React from 'react'
import { Prism } from '@mantine/prism';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const cssDemo = `
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`


type Props = {
    code?: string
}

const Code = ({ code }: Props) => {
    return (
        <Prism.Tabs>
            <Prism.Tab
                colorScheme='dark'
                label="component.tsx"
                language="tsx"
                icon={<TsIcon />}
            >
                {code || demoCode}
            </Prism.Tab>
            <Prism.Tab
                colorScheme='dark'
                label="global.css"
                language="css"
                icon={<CSSIcon />}
            >
                {cssDemo}
            </Prism.Tab>
        </Prism.Tabs>
    )
}

export default Code


export function TsIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            viewBox="0 0 48 48" {...props}>
            <path fill="#1976d2" d="M6 6h36v36H6z" />
            <path
                fill="#fff"
                d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
            />
        </svg>
    );
}

function CSSIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="20" height="20"
            viewBox="0 0 48 48" {...props}>
            <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
            <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
            <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" />
            <path
                fill="#EEE"
                d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
            />
        </svg>
    );
}