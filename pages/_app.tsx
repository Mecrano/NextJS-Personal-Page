import type { AppProps } from 'next/app'
import { NextIntlProvider } from 'next-intl'

import Layout from 'components/layout'
import GA from 'components/GA'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
      timeZone="America/Bogota"
    >
      <GA />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}

export default MyApp
