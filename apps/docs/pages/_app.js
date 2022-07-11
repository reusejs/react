import "../styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
