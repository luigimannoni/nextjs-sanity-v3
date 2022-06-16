import Document, { Html, Head, Main, NextScript } from 'next/document'
import { client } from '../lib/client'
import { QUERY_SITE_SETTINGS } from '../lib/queries'
import { urlForImage } from '../lib/images'

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const settings = await client.fetch(QUERY_SITE_SETTINGS)
    return { ...settings, ...initialProps }
  }

  render () {
    const { title, titlemeta, description, seoimage = null } = this.props
    const image = seoimage && seoimage.asset ? urlForImage(seoimage).url() : null

    const url = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="google-site-verification" content="y2wzpGZrMmvGJEjuGcYt3VG1fiHln2ONOJhWBelaJN4" />
          <meta name="title" content={titlemeta} />
          <meta name="description" content={description} />
          <meta property="og:title" content={titlemeta} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" itemProp="image" content={image} />
          <meta property="og:image:secure_url" itemProp="image" content={image} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          <meta name="twitter:site" content={title} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={titlemeta} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <link rel="icon" type="image/png" href="./public/favicon-32x32.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="./public/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="./public/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="./public/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="./public/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="./public/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="./public/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="./public/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="./public/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="./public/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="./public/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="./public/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon-16x16.png" />
          <link rel="manifest" href="./public/manifest.json" />
          <meta name="msapplication-TileColor" content="#f2f2f2" />
          <meta name="msapplication-TileImage" content="./public/ms-icon-144x144.png" />
          <meta name="theme-color" content="#f2f2f2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
