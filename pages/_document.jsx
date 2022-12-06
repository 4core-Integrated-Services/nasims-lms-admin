import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,500&family=Raleway:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body
        className="flex h-screen bg-gray-50 dark:bg-gray-900"
        style={{
          fontStyle: "Raleway",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
