import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net/" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossOrigin="anonymous" />
      </Head>
      <body className="px-8 py-8 antialiased bg-adn-color-fill-bg supports-variableFonts:font-[450]">
        <article className="
                    container 
                    prose dark:prose-invert prose-adn-color
                    text-sm sm:text-base
                    prose-h1:text-center
                    prose-h1:text-2xl sm:prose-h1:text-3xl
                    prose-h1:font-black
                    prose-h1:leading-snug 
                    prose-h2:text-lg sm:prose-h2:text-xl
                    prose-h2:leading-relaxed
                    prose-h2:font-extrabold
                    prose-table:text-sm sm:prose-table:text-base
                    ">
          <Main />
        </article>
        <NextScript />
      </body>
    </Html>
  )
}