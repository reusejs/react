import 'focus-visible'
import { ThemeProvider as DarkLightThemeProvider } from 'next-themes'
import { ThemeProvider, theme } from '@reusejs/react'
import '@/styles/tailwind.css'

// import 'prismjs/themes/prism-okaidia.css'

const newTheme = {
  ...theme,
  ...{
    // labelBaseClassNames: 'block text-sm font-medium text-green-800',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <DarkLightThemeProvider attribute="class" defaultTheme="light">
      <ThemeProvider value={newTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkLightThemeProvider>
  )
}

export default MyApp
