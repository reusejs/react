import 'focus-visible'
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
    <ThemeProvider value={newTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
