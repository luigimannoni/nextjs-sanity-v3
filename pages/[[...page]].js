import React from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import useSWR from 'swr'

import { client } from '../lib/client'
import { urlFor } from '../lib/images'

import Components from '../components'
import { QUERY_FOOTER, QUERY_SITEMAP, querySlug } from '../lib/queries'
// import Footer from '../components/nav/footer'
import Spinner from '../components/partials/Spinner'

const fetcher = async (url) => {
  const content = await client.fetch(querySlug(url))
  // const footer = await client.fetch(QUERY_FOOTER)

  return { content }
}

function Page({ fallbackData }) {
  const router = useRouter()
  const isBrowser = (typeof document !== 'undefined' && router.query && router.query.slug)

  let url = false
  if (Array.isArray(router.query.slug)) {
    url = isBrowser ? router.query.slug[0].replace(/^\/|\/$/g, '') : 'homepage'
  } else {
    url = isBrowser ? router.query.slug.replace(/^\/|\/$/g, '') : 'homepage'
  }

  const { data } = useSWR(url, fetcher, { fallbackData })

  if (!data) {
    return <Spinner />
  }

  const { content } = data

  const { components, name, image } = content
  const openGraph = {}

  if (image) {
    openGraph.images = [{url: urlFor(image).url()}]
  }

  return (
    <>
      <NextSeo
        title={`${name} | Sitename`}
        openGraph={openGraph}
      />
      <section className={`page page--${router.query.slug}`}>
        <Components components={components}/>
        {/* <Footer image={footerimage} {...footer} /> */}
      </section>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const content = await client.fetch(querySlug(slug))
  const footer = await client.fetch(QUERY_FOOTER)

  return {
    props: {
      fallbackData: {
        content,
        footer,
      },
    },
  }
}

export async function getStaticPaths() {
  const pages = await client.fetch(QUERY_SITEMAP)
  const paths = pages.map(({ params }) => ({
    params: { page: [ params.slug ] },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Page
