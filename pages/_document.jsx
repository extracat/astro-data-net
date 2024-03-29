import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="px-8 py-8 antialiased adn-color-fill-bg">
        <article className="
                    container 
                    ___max-w-[960px]
                    prose
                    dark:prose-invert 
                    prose-adn-color 
                    prose-h1:text-center
                    prose-h1:text-3xl
                    prose-h1:leading-normal
                    prose-h2:text-2xl
                    prose-h2:leading-relaxed
                    prose-table:text-base
                    ">
          <Main />
        </article>
        <NextScript />
      </body>
    </Html>
  )
}