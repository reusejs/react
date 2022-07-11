import "../styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";

// theme.labelBaseClassNames = "block text-sm font-medium text-red-800";

const newTheme = {
  ...theme,
  ...{
    labelBaseClassNames: "block text-sm font-medium text-green-800",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider value={newTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
