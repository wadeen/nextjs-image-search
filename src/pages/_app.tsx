import '@/styles/globals.scss'
import '@/styles/destyle.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/templates/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>画像検索アプリ</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
