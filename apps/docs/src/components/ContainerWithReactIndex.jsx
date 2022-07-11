import clsx from 'clsx'
import Link from 'next/link'
const styles = {
  xs: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2',
  sm: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12',
  md: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8',
  lg: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8',
}
import { useTheme } from 'next-themes'

export function ContainerWithReactIndex({ size = 'sm', className, ...props }) {
  const { theme, setTheme } = useTheme()

  return (
    <div className={clsx(styles[size], 'py-16', className)}>
      <div className="flex justify-between">
        <Link href="/react">
          <span className="text-sm text-blue-400 underline">Go Back</span>
        </Link>
        <div>
          {theme === 'dark' && (
            <button
              onClick={() => setTheme('light')}
              className="text-xs font-bold text-gray-900"
            >
              switch to light theme
            </button>
          )}

          {theme === 'light' && (
            <button
              onClick={() => setTheme('dark')}
              className="text-xs font-bold text-gray-900"
            >
              switch to dark theme
            </button>
          )}
        </div>
      </div>
      <div className="mt-8" {...props} />
    </div>
  )
}
