import "../styles/globals.css";
import "../styles/Home.css";
import "react-tooltip/dist/react-tooltip.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        cross-origin={"true"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        cross-origin={"true"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Component {...pageProps} />
      <ToastContainer position="bottom-center" delay={4000} />
    </div>
  );
}
