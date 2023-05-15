import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dx-viewport">
        <div className="dx-viewport">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
