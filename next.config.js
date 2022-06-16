/** @type {import('next').NextConfig} */
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'local',
  useCdn: true,
  apiVersion: 'v2022-01-18',
})

const query = `
  *[_type == "pages"] {
    slug
  }
`

const nextConfig = {
  reactStrictMode: true,
}


const reduceRoutes = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    }
  }, initialValue)
}

const exportPathMap = async (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId }
) => {
  return client.fetch(query).then((res) => {
    const pages = res
    const routes = pages.map((page) => ({
      page: '/[[...page]]',
      query: {
        page: page.slug.current,
      },
      includeInSitemap: true,
      url: `/${page.slug.current === 'homepage' ? '' : page.slug.current}`,
    }))

    const nextRoutes = reduceRoutes(routes, 'url')
    return nextRoutes
  })
}

module.exports = {
  ...nextConfig,
  exportPathMap,
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'custom',
  },
}
