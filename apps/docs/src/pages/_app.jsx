import 'focus-visible'
import { ThemeProvider as DarkLightThemeProvider } from 'next-themes'
import { ThemeProvider, theme } from '@reusejs/react'
import '@/styles/tailwind.css'

const newTheme = {
  ...theme,
}

const variants = {
  primary: {
    labelClasses: {
      color: 'text-cyan-200',
    },
  },
}

newTheme['variants'] = variants

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
