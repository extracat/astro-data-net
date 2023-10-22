import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="px-8 py-8 antialiased bg-white dark:bg-black">
        <article className="container prose dark:prose-invert">
          <Main />
        </article>
        <NextScript />
      </body>
    </Html>
  )
}