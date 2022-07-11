import Head from 'next/head'
import Image from 'next/image'
import { LabelBase } from '@reusejs/react'
import { ContainerWithReactIndex } from '@/components/ContainerWithReactIndex'
import { UsagePreviewReact } from '@/components/UsagePreviewReact'
import { useEffect } from 'react'
const prism = require('prismjs')
require('prismjs/components/prism-javascript')
import { BadgeBase, BadgeGreen, BadgeSuffixBase } from '@reusejs/react'

export default function Labels() {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <div>
      <Head>
        <title>Badges</title>
      </Head>

      <ContainerWithReactIndex>
        <UsagePreviewReact
          title="Default Badge"
          codePreview={`<BadgeBase label={"Label"} />`}
        >
          <BadgeBase label={'Label'} />
        </UsagePreviewReact>

        <UsagePreviewReact
          title="Badge With Different Props overridden"
          codePreview={`<BadgeBase
  label={'Label'}
  badgeClasses={{
    padding: 'px-3 py-0.5',
    color: 'bg-green-100 text-green-800',
    font: 'text-sm font-medium',
    borderRadius: 'rounded-md',
  }}
/>`}
        >
          <BadgeBase
            label={'Label'}
            badgeClasses={{
              padding: 'px-3 py-0.5',
              color: 'bg-green-100 text-green-800',
              font: 'text-sm font-medium',
              borderRadius: 'rounded-md',
            }}
          />
        </UsagePreviewReact>

        <UsagePreviewReact
          title="Badge with Suffix"
          codePreview={`<BadgeBase label={"Label"} />`}
        >
          <BadgeBase
            label={'Label'}
            badgeSuffix={
              <svg
                className="ml-1.5 h-2 w-2 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
            }
          />
        </UsagePreviewReact>

        <UsagePreviewReact
          title="Badge with Prefix"
          codePreview={`<BadgeBase label={"Label"} />`}
        >
          <BadgeBase
            label={'Label'}
            badgePrefix={
              <svg
                className="mr-1.5 h-2 w-2 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
            }
          />
        </UsagePreviewReact>
      </ContainerWithReactIndex>
    </div>
  )
}
