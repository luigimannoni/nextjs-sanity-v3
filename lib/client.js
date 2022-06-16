import sanityClient from '@sanity/client'
import { projectId, dataset } from '../sanity.config'

const clientConfig = {
  projectId,
  dataset,
  useCdn: typeof document === 'undefined' && process.env.NODE_ENV === 'production',
  apiVersion: 'v2022-06-15',
}

export const client = sanityClient(clientConfig)

export function createPreviewClient({
  token = process.env.SANITY_API_TOKEN,
}) {
  if (!token) {
    throw new Error('No API token provided to the Sanity Preview client')
  }

  if (typeof document !== 'undefined') {
    throw new Error(
      'Your Sanity API token is exposed in your browser bundle, revoke it and create a new one in sanity.io/manage'
    )
  }

  return client.withConfig({ token, useCdn: false })
}
