import { Container } from '@/components/Container'
import Link from 'next/link'

const tableOfContents = {
  Atoms: {
    Labels: '/atoms/labels',
    'Intro to Figma': '/atoms/label',
    'Setting up your first artboard': '/atoms/label',
  },
  Molecules: {
    'Strokes and fills': '/atoms/label',
    'End points': '/atoms/label',
    'Bezier curves': '/atoms/label',
    'Designing on a grid': '/atoms/label',
    'Vector shapes': '/atoms/label',
  },
  Organisms: {
    'Combining shapes': '/atoms/label',
    'Subtracting shapes': '/atoms/label',
    'Intersecting shapes': '/atoms/label',
  },
}

export function ReactTableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className=""
    >
      <Container>
        <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
          {Object.entries(tableOfContents).map(([title, pages]) => (
            <li key={title}>
              <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                {title}
              </h3>
              <ol
                role="list"
                className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
              >
                {Object.entries(pages).map(([title, href]) => (
                  <Link key={title} href={href}>
                    <li
                      key={title}
                      className="flex cursor-pointer justify-between py-3"
                    >
                      <span
                        className="font-medium text-slate-900 hover:text-blue-500"
                        aria-hidden="true"
                      >
                        {title}
                      </span>
                    </li>
                  </Link>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
