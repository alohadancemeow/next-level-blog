import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider, ColorScheme, Space } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

import GlobalStyles from 'styles/GlobalStyles';
import { useState } from 'react';
import Player from 'components/Player';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod + D', () => toggleColorScheme()]]);

  const [opened, setOpened] = useState<boolean>(false);
  useHotkeys([['mod + shift + L', () => setOpened((o) => !o)]]);

  return (
    <>
      <Head>
        {/* <title>Personal Home</title> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/astonished.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
            primaryColor: 'orange',
            fontFamily: ["'JetBrains Mono', 'Bai Jamjuree'"],

            headings: {
              fontFamily: 'JetBrains Mono',
              fontWeight: '500',
              sizes: {
                h2: 24,
                h3: 18
              }
            },
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
          }}
        >
          <GlobalStyles />
          <Component {...pageProps} />
          <Player opened={opened} setOpened={setOpened} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}