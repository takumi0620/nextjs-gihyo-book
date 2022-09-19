import type { AppProps } from 'next/app'
import Head from "next/head"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textArea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: .25s;
    color: #000;
  }

  * {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5" />
        <meta property="og:local" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
