import { createConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { dashboardTool } from '@sanity/dashboard'
import { deskTool } from 'sanity/desk'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export default createConfig({
  name: 'Sanity Dashboard',
  title: 'nextjs-sanity',
  basePath: '/admin',
  projectId,
  dataset,

  plugins: [
    dashboardTool(),
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
