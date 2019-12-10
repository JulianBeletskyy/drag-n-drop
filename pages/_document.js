import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" crossOrigin="anonymous" />
          <script src="https://kit.fontawesome.com/09cfe35b3e.js" crossOrigin="anonymous"></script>
        </Head>
        <body>
          <div className="py-3 container">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument