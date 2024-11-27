import { component$, useStyles$ } from "@builder.io/qwik"
import { RouterHead } from "./components/router-head/router-head"
import {
  RouterOutlet,
  QwikCityProvider,
  ServiceWorkerRegister
} from "@builder.io/qwik-city"

import globalStyles from "./global.css?inline"

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-adsense-account" content="ca-pub-3297522505307737"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3297522505307737"
          crossOrigin="anonymous"></script>
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
