import Head from 'next/head'
import Image from 'next/image'
import { LabelBase } from '@reusejs/react'
import { ContainerWithReactIndex } from '@/components/ContainerWithReactIndex'
import { UsagePreviewReact } from '@/components/UsagePreviewReact'
import { useEffect } from 'react'
const prism = require('prismjs')
require('prismjs/components/prism-javascript')

export default function Labels() {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <div>
      <Head>
        <title>Labels</title>
      </Head>

      <ContainerWithReactIndex>
        <UsagePreviewReact
          title="Label with default styles"
          codePreview={`
                <LabelBase
                  label="Email Me"
                  htmlFor="email"
                />
            `}
        >
          <LabelBase
            label="Email Me"
            htmlFor="email"
            // labelBaseClassNames="text-blue-200"
            // labelBaseStyles={{
            //   backgroundColor: "yellow",
            // }}
          />
        </UsagePreviewReact>

        <UsagePreviewReact
          title="Label with overridden styles"
          codePreview={`
                <LabelBase
                  label="Email Me"
                  htmlFor="email"
                  labelBaseClassNames="text-blue-200"
                  labelBaseStyles={{
                    backgroundColor: 'yellow',
                  }}
                />
            `}
        >
          <LabelBase
            label="Email Me"
            htmlFor="email"
            labelBaseClassNames="text-red-600"
            labelBaseStyles={{
              backgroundColor: 'yellow',
            }}
          />
        </UsagePreviewReact>
      </ContainerWithReactIndex>
    </div>
  )
}
