import Head from 'next/head'
import { renderStudio } from 'sanity'
import createConfig from '../../sanity.config'

import { useEffect, useRef } from 'react'

export default function Admin() {
  const studioRef = useRef()
  useEffect(() => {
    renderStudio(studioRef.current, createConfig)
  })

  return (
    <>
      <Head>
        <title>Sanity Dashboard</title>
      </Head>

      <div ref={studioRef} className="h-screen m-0 overflow-hidden">

        {/* Currently the component does not render as it should
            Let's create the studio with the renderstudio helper above
        <Studio
          config={{
            name: 'Sanity Dashboard',
            title: 'nextjs-sanity',
            basePath: '/admin',
            projectId: '...',
            dataset: 'production',

            plugins: [
              dashboardTool(),
              deskTool(),
            ],

            schema: {
              types: schemaTypes,
            },
          }}
        /> */}
      </div>
    </>

  )
}

