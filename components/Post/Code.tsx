import { Prism } from "@mantine/prism";

import { CSSIcon, JsIcon, TsIcon, NpmIcon } from "./SvgIcons";

type Props = {
  code?: string;
};

const Code = ({ code }: Props) => {
  return (
    <Prism.Tabs defaultValue="component.tsx">
      <Prism.TabsList>
        <Prism.Tab color="dark" value="component.tsx" icon={<TsIcon />}>
          Component.tsx
        </Prism.Tab>
        <Prism.Tab color="dark" value="App.jsx" icon={<JsIcon />}>
          App.jsx
        </Prism.Tab>
        <Prism.Tab color="dark" value="global.css" icon={<CSSIcon />}>
          global.css
        </Prism.Tab>
        <Prism.Tab color="dark" value="npm" icon={<NpmIcon />}>
          npm
        </Prism.Tab>
      </Prism.TabsList>

      <Prism.Panel language="tsx" value="component.tsx">
        {code || demoCode}
      </Prism.Panel>
      <Prism.Panel language="jsx" value="App.jsx">
        {jsDemo}
      </Prism.Panel>
      <Prism.Panel language="css" value="global.css">
        {cssDemo}
      </Prism.Panel>
      <Prism.Panel language="bash" value="npm">
        {npmCode}
      </Prism.Panel>
    </Prism.Tabs>
  );
};

export default Code;

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

`;
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
`;

const npmCode = `
npx create-next-app my-app
cd my-app
npm run dev
`;
