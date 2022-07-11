import { Container } from '@/components/Container'
import Link from 'next/link'
import { BadgeBase } from '@reusejs/react'

const tableOfContents = {
  Atoms: {
    Labels: { status: 'done', href: '/atoms/labels' },
    Arrows: { status: 'coming soon', href: '/atoms/labels' },
    Badges: { status: 'done', href: '/atoms/badges' }, // https://tailwindui.com/components/application-ui/elements/badges
    Breadcrumbs: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/navigation/breadcrumbs
    Buttons: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Dividers: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Headings: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Images: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    TextInputs: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Links: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Loaders: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Prices: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Properties: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    QuantitySelectors: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Ratings: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    Skeletons: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
    TextAreas: { status: 'coming soon', href: '/atoms/labels' }, // https://tailwindui.com/components/application-ui/elements/buttons
  },
  Molecules: {
    Alerts: { status: 'coming soon', href: '/atoms/labels' },
    Banners: { status: 'coming soon', href: '/atoms/labels' },
    CTAs: { status: 'coming soon', href: '/atoms/labels' },
    Cards: { status: 'coming soon', href: '/atoms/labels' },
    CheckboxPickers: { status: 'coming soon', href: '/atoms/labels' },
    SelectPickers: { status: 'coming soon', href: '/atoms/labels' },
    Dropdowns: { status: 'coming soon', href: '/atoms/labels' },
    Filters: { status: 'coming soon', href: '/atoms/labels' },
    Galleries: { status: 'coming soon', href: '/atoms/labels' },
    Modals: { status: 'coming soon', href: '/atoms/labels' },
    Paginations: { status: 'coming soon', href: '/atoms/labels' },
    RadioPickers: { status: 'coming soon', href: '/atoms/labels' },
    RangePickers: { status: 'coming soon', href: '/atoms/labels' },
    ReviewBoxes: { status: 'coming soon', href: '/atoms/labels' },
    Scrollables: { status: 'coming soon', href: '/atoms/labels' },
    SearchBars: { status: 'coming soon', href: '/atoms/labels' },
    Sections: { status: 'coming soon', href: '/atoms/labels' },
    Steppers: { status: 'coming soon', href: '/atoms/labels' },
  },
  Organisms: {
    Accordions: { status: 'coming soon', href: '/atoms/labels' },
    BannerGrids: { status: 'coming soon', href: '/atoms/labels' },
    Navigations: { status: 'coming soon', href: '/atoms/labels' }, // Sidebar, Header
    Carousels: { status: 'coming soon', href: '/atoms/labels' },
    ContentPages: { status: 'coming soon', href: '/atoms/labels' },
    Footers: { status: 'coming soon', href: '/atoms/labels' },
    Heros: { status: 'coming soon', href: '/atoms/labels' },
    Menus: { status: 'coming soon', href: '/atoms/labels' },
    Tables: { status: 'coming soon', href: '/atoms/labels' },
    Tabs: { status: 'coming soon', href: '/atoms/labels' },
  },
  Templates: {
    Forms: { status: 'coming soon', href: '/atoms/labels' },
    Invoices: { status: 'coming soon', href: '/atoms/labels' },
    Dashboards: { status: 'coming soon', href: '/atoms/labels' },
  },
  Pages: {
    HomePage: { status: 'coming soon', href: '/atoms/labels' },
    BrowseProducts: { status: 'coming soon', href: '/atoms/labels' },
    ProductDetail: { status: 'coming soon', href: '/atoms/labels' },
    Login: { status: 'coming soon', href: '/atoms/labels' },
    PersonalDetails: { status: 'coming soon', href: '/atoms/labels' },
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
                {Object.entries(pages).map(([title, value]) => (
                  <li
                    key={title}
                    className="flex cursor-pointer justify-between py-3"
                  >
                    <Link
                      key={title}
                      href={value.href}
                      className="flex w-full cursor-pointer flex-row justify-between"
                    >
                      <span
                        className="font-medium text-slate-900 hover:text-blue-500"
                        aria-hidden="true"
                      >
                        {title}
                      </span>
                      <BadgeBase
                        label={value.status}
                        badgeClasses={{
                          color:
                            value.status === 'done'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800',
                        }}
                      />
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
