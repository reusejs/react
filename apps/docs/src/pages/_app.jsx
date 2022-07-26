import 'focus-visible'
import { ThemeProvider as DarkLightThemeProvider } from 'next-themes'
// import { ButtonBase, theme } from '@reusejs/react'
import '@/styles/tailwind.css'
import { Button } from 'ui-library'

function MyApp({ Component, pageProps }) {
  return (
    <DarkLightThemeProvider attribute="class" defaultTheme="light">
      <Button>I am a button</Button>
      <Component {...pageProps} />
    </DarkLightThemeProvider>
  )
}

export default MyApp
