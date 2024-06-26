import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'DevMations - Next Js Creative SAAS Technology & IT Solutions React Template';
const APP_DESCRIPTION = 'DevMations creative Saas, software technology, Saas agency & business react template. It is best and famous software company and Saas website template.';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
