import "@/styles/global.scss"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="Tools Edit App For Toolhub"></meta>
        <meta property="og:title" content="ToolsEditHunt" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tools-edit-hunt.vercel.app" />
        <meta property="og:image" content="https://tools-edit-hunt.vercel.app/dashboard.png" />
        <meta name="twitter:title" property="og:title" content="ToolsEditHunt" />
        <meta name="twitter:site_name" property="og:site_name" content="@toolsedithunt" />
        <meta name="twitter:image" content="https://tools-edit-hunt.vercel.app/dashboard.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          property="twitter:description"
          content="Edit tools faster and more enjoyable on Toolhub in a streamlined and gamified way"
        />
        <meta
          property="og:description"
          content="Edit tools faster and more enjoyable on Toolhub in a streamlined and gamified way"
        />
        <meta
          name="description"
          content="Edit tools faster and more enjoyable on Toolhub in a streamlined and gamified way"
        />

        <link rel="icon" href="/favicon.png" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
        <title>Tool Edit Hunt</title>
      </Head>
      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
