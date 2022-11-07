import '../styles/globals.css'

import type { AppProps } from 'next/app';
import PageLayout from '../Layout/PageLayout';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-V9T4KK9Y85`} />

    <Script id={'1'} strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-V9T4KK9Y85', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
    </>
  )
}

export default MyApp
