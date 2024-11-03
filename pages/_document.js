import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='fa' dir='rtl'>
      <Head >
        <link rel='manifest' href='public/manifest.json'/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content="UMPWA"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/icons/apple/icon-57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/icons/apple/icon-60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/icons/apple/icon-72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/icons/apple/icon-76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/icons/apple/icon-114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/icons/apple/icon-120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/icons/apple/icon-144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/icons/apple/icon-152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icons/apple/icon-180.png"/>
    
        <meta name="msapplication-TileImage" content="/assets/images/icons/original/icon-144.png"/>
        <meta name="msapplication-TileColor" content="#fff"/>
        <meta name="theme-color" content="#1e88e5"/>
      </Head>  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}