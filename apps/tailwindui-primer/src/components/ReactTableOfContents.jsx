import { Container } from '@/components/Container'
import Link from 'next/link'

const tableOfContents = {
  Atoms: {
    Labels: '/atoms/labels',
    Arrows: '/atoms/labels',
    Badges: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/badges
    Breadcrumbs: '/atoms/labels', // https://tailwindui.com/components/application-ui/navigation/breadcrumbs
    Buttons: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Dividers: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Headings: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Images: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    TextInputs: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Links: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Loaders: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Prices: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Properties: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    QuantitySelectors: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Ratings: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    Skeletons: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
    TextAreas: '/atoms/labels', // https://tailwindui.com/components/application-ui/elements/buttons
  },
  Molecules: {
    Alerts: '/atoms/label',
    Banners: '/atoms/label',
    CTAs: '/atoms/label',
    Cards: '/atoms/label',
    CheckboxPickers: '/atoms/label',
    SelectPickers: '/atoms/label',
    Dropdowns: '/atoms/label',
    Filters: '/atoms/label',
    Galleries: '/atoms/label',
    Modals: '/atoms/label',
    Paginations: '/atoms/label',
    RadioPickers: '/atoms/label',
    RangePickers: '/atoms/label',
    ReviewBoxes: '/atoms/label',
    Scrollables: '/atoms/label',
    SearchBars: '/atoms/label',
    Sections: '/atoms/label',
    Steppers: '/atoms/label',
  },
  Organisms: {
    Accordions: '/atoms/label',
    BannerGrids: '/atoms/label',
    Navigations: '/atoms/label', // Sidebar, Header
    Carousels: '/atoms/label',
    ContentPages: '/atoms/label',
    Footers: '/atoms/label',
    Heros: '/atoms/label',
    Menus: '/atoms/label',
    Tables: '/atoms/label',
    Tabs: '/atoms/label',
  },
  Templates: {
    Forms: '/atoms/label',
    Invoices: '/atoms/label',
    Dashboards: '/atoms/label',
  },
  Pages: {
    HomePage: '/atoms/label',
    BrowseProducts: '/atoms/label',
    ProductDetail: '/atoms/label',
    Login: '/atoms/label',
    PersonalDetails: '/atoms/label',
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
