import Head from 'next/head'
import {
  Studio,
} from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '../../schemas'
// import { dashboardTool } from '@sanity/dashboard'

export default function Admin() {
  return (
    <>
      <Head>
        <title>Sanity Dashboard</title>
      </Head>

      <div className="h-screen m-0 overflow-hidden">
        <Studio
          config={{
            name: 'Sanity Dashboard',
            title: 'nextjs-sanity',
            basePath: '/admin',
            projectId: 'iaou38rg',
            dataset: 'production',

            plugins: [
              // dashboardTool(),
              deskTool(),
            ],

            schema: {
              types: schemaTypes,
            },
          }}
        />
      </div>
    </>

  )
}

