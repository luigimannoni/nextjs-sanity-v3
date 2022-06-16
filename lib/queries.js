// Dynamic query
export const querySlug = (slug = 'homepage') => {
  return `
    *[_type == "pages" && slug.current == "${slug}"][0] {
      name,
      image
      components[]-> {
        ...,
      },
    }
  `
}

// Navigation menu
export const QUERY_NAV = `
  *[_type == "nav" && position == "main"] {
    _id,
    links[]-> {
      _id,
      name,
      slug,
    },
  }
`

export const QUERY_FOOTER_NAV = `
  *[_type == "nav" && position == "footer"] {
    _id,
    links[]-> {
      _id,
      name,
      slug,
    },
  }
`

// Full sitemap download
export const QUERY_SITEMAP = `
  *[_type == "pages"] {
    "params": {
      "slug": slug.current,
    }
  }
`
