import { ContainerWithReactIndex } from '@/components/ContainerWithReactIndex'
import { Footer } from '@/components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>React | ReuseJS</title>
      </Head>
      <ContainerWithReactIndex>
        <div className="prose mx-auto w-full rounded-lg bg-gray-100 px-4 py-8 text-gray-800 dark:prose-invert dark:bg-gray-800 dark:text-gray-100">
          <h2>How to Run?</h2>

          <p>
            <ol>
              <li>
                Install the Package: <code>yarn add @reusejs/react</code>
              </li>
              <li>Install Tailwind so that you can customize</li>
              <li>
                Install Theme Provider:{' '}
                <a href="https://github.com/reusejs/react/blob/main/apps/docs/src/pages/_app.jsx">
                  https://github.com/reusejs/react/blob/main/apps/docs/src/pages/_app.jsx
                </a>
              </li>
              <li>
                Explore <code>apps/docs/src/pages/react</code> folder for
                components and their usage
              </li>
            </ol>
          </p>

          <h2>How to Customise?</h2>

          <p>
            What I love about Reusejs/React is various ways to override,
            customise components.
            <ol>
              <li>
                <b>Way 1: Pass Styles at each Component Level.</b> You can't
                reuse much, This way sucks. But if you want to override via
                styles, just pass <code>labelStyles</code> or respective
                components Styles prop
              </li>
              <li>
                <b>Way 2: Pass Classes via various Props.</b> Might be good, but
                again, it means you don't have good grip on your design. Less
                Reusability
              </li>
              <li>
                <b>Way 3: Introduce Variants.</b> Usually this is how you might
                go with your components. Your app is usually made up of 3-4
                variants of buttons etc.,, configure them upfront, and use them.
              </li>
              <li>
                <b>Way 4: Override Classes at Theme File.</b> Not as great as
                Variants because you might have multiple variants of same basic
                component.
              </li>
            </ol>
          </p>
        </div>
      </ContainerWithReactIndex>
      <Footer />
    </>
  )
}
