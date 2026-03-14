import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VPHL96LY7Q"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VPHL96LY7Q');
        `}
      </Script>
    </>
  );
}
