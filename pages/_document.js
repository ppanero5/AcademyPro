import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b1329" />
        {/* Parametri nativi Apple per eliminare le barre di Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AcademyPro" />
        <link rel="apple-touch-icon" href="https://img.icons8.com/color/192/skiing.png" />
      </Head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0b1329', color: '#fff' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
