import Head from 'next/head'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { ReactTableOfContents } from '@/components/ReactTableOfContents'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>React | ReuseJS</title>
      </Head>
      <Container>
        <div className="flex items-center justify-between pt-16">
          <div>
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              React Components
            </h1>
          </div>
          <div>
            {/* <Link
              href="/react/how"
              className="block w-32 rounded-md bg-gray-100 p-4 text-center font-semibold dark:bg-gray-800 dark:text-gray-100"
            >
              Hows
            </Link> */}
          </div>
        </div>
      </Container>
      <ReactTableOfContents />
      <div className="pb-32"></div>
      <Footer />
    </>
  )
}
