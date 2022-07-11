import clsx from 'clsx'
import Link from 'next/link'
const styles = {
  xs: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2',
  sm: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12',
  md: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8',
  lg: 'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8',
}

export function ContainerWithReactIndex({ size = 'sm', className, ...props }) {
  return (
    <div className={clsx(styles[size], 'py-16', className)}>
      <Link href="/react">
        <span className="text-sm text-blue-400 underline">Go Back</span>
      </Link>
      <div className="mt-8" {...props} />
    </div>
  )
}
