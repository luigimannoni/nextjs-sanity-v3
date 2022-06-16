export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Public name of the page, this will be displayed in the browser\'s title bar and on navigation menus.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL of the page. If you wish this page to be the home page insert "homepage" without quotes.',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'components',
      title: 'Page Components',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'components' } }],
    },
    {
      name: 'image',
      title: 'SEO Image',
      description: 'Image used for search engine purposes and when sharing this page on social medias. If not set, the default website logo will be used.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'footer',
      title: 'Footer Image',
      description: 'Image used at the vey end of the page below the footer. If not set it\'ll fallback to a default image.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
