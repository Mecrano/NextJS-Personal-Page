import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { NextIntlProvider } from 'next-intl'

import Layout from 'components/layout'
import GA from 'components/GA'
import { event } from 'lib/gtag'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
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

export const reportWebVitals = ({ id, name, label, value }: NextWebVitalsMetric) => {
  if (typeof window !== 'undefined' && typeof window?.gtag !== 'undefined') {
    event({
      action: name,
      category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      label: id,
      value,
    })
  }
}

export default MyApp
