import React from 'react'
import { Prism } from '@mantine/prism';

import { CSSIcon, JsIcon, TsIcon, NpmIcon } from './SvgIcons'

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
                label="App.jsx"
                language="tsx"
                icon={<JsIcon />}
            >
                {jsDemo}
            </Prism.Tab>
            <Prism.Tab
                colorScheme='dark'
                label="global.css"
                language="css"
                icon={<CSSIcon />}
            >
                {cssDemo}
            </Prism.Tab>
            <Prism.Tab
                colorScheme='dark'
                label="npm"
                language="bash"
                icon={<NpmIcon />}
            >
                {npmCode}
            </Prism.Tab>
        </Prism.Tabs>
    )
}

export default Code

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
const jsDemo = `
import React, { useState } from 'react' 

const App = () => {
    const [state, setState] = useState(false)
    return (
        <div>
            <div> Hi! Mom </div>
            <PageA state={state} />
        </div>
    )
}
export default App

const PageA  = ({ state }) => {
    console.log(state) // output => false
    return (
        //TODO: do something.
    )
}
`

const npmCode = `
npx create-next-app my-app
cd my-app
npm run dev
`