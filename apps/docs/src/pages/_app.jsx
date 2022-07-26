import 'focus-visible'
import { ThemeProvider as DarkLightThemeProvider } from 'next-themes'
// import { ButtonBase, theme } from '@reusejs/react'
import '@/styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <DarkLightThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
    </DarkLightThemeProvider>
  )
}

export default MyApp
