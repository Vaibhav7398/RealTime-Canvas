import { Html, Head, Main, NextScript, DocumentProps, DocumentInitialProps } from "next/document";
import NextDocument from "next/document";

class Document extends NextDocument<DocumentProps, DocumentInitialProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Portal root for modals or tooltips */}
          <div id="portal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
