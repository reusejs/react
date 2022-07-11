import "../styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";

// theme.labelBaseClassNames = "block text-sm font-medium text-red-800";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
