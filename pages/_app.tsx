import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from 'global-style';
import theme from 'theme';


const App = (props: AppProps) => <>
    <GlobalStyle />

    <Head>
        <title key='title'>
            Bunid Test
        </title>

        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content={ theme.color.background } />
        <meta name='application-name' content='Bunid Test' />

        <link
            href='https://use.typekit.net/teb5paw.css'
            rel='stylesheet'
        />
    </Head>

    <props.Component { ...{ ...props.pageProps }}/>

    <link
        href='https://use.fontawesome.com/releases/v5.1.0/css/all.css'
        rel='stylesheet'
    />
</>;


export default App;
