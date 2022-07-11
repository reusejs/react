import Head from 'next/head'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { ReactTableOfContents } from '@/components/ReactTableOfContents'

export default function Home() {
  return (
    <>
      <Head>
        <title>React | ReuseJS</title>
      </Head>
      <Container>
        <h1 className="pt-16 font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
          React Components
        </h1>
      </Container>
      <ReactTableOfContents />
      <div className="pb-32"></div>
      <Footer />
    </>
  )
}
