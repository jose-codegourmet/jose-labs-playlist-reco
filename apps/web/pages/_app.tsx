import { AppProps } from "next/app";
import "../styles/main.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="forest">
      <Component {...pageProps} />
    </div>
  );
}
