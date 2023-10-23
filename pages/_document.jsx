import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous" />

      </Head>
      <body className="px-8 py-8 antialiased bg-white dark:bg-black">
        <article className="container prose dark:prose-invert">
          <Main />
        </article>
        <NextScript />
      </body>
    </Html>
  )
}