import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import {isPageProperties, PageProperties} from '../src/Page';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/Layout';

import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface SimplyRecipesAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

class SimplyRecipesApp extends App {
  render(): JSX.Element {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = this.props;
    const subtitle: string | undefined = isPageProperties(Component) ? Component.getSubtitle() : undefined;

    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout subtitle={subtitle}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default SimplyRecipesApp;
