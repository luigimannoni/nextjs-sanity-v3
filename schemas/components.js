import { SiDatabricks } from 'react-icons/si';
const typeDef = {
  'hero': 'Hero',
  'fullwidth-image': 'Fullwidth Image',
  'columns': 'Content Columns',
  'gallery': 'Gallery',
}

export default {
  icon: SiDatabricks,
  name: 'components',
  title: 'Page Components',
  type: 'document',
  validation: Rule => Rule.custom(({asset, type, image}) => {
    if (type === 'hero' && !asset) return "A file asset is required to be uploaded for the hero component"
    if (type === 'fullwidth-image' && !image.asset) return "An image is required to be uploaded for the fullwidth image component"
    return true
  }),
	fieldsets: [
    {
      name: 'layout',
      title: 'Layout',
      options: {
        collapsable: true,
        collapsed: true,
      },
    },
    {
      name: 'alignment',
      title: 'Alignment',
      options: {
        columns: 2,
        collapsable: true,
        collapsed: true,
      },
    }
  ],
  fields: [
    {
      name: 'name',
      title: 'Internal Name',
      description: 'This is the name that will be used to reference this component in the pages. Displayed on this dashboard only.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      description: 'Component type. Use content columns to build the page elements, the other options are decorative elements, usually used on the top of page.',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'columns',
      options: {
        list: [
          { title: 'Hero', value: 'hero' },
          { title: 'Fullwidth Image', value: 'fullwidth-image' },
          { title: 'Content Columns', value: 'columns' },
          { title: 'Gallery', value: 'gallery' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'asset',
      title: 'Asset File',
      hidden: ({ document }) => document.type !== 'hero',
      type: 'file',
      fields: [
        {
          name: 'text',
          title: 'Text Overlay',
          description: 'Text overlay, only applied when the component is set as Hero.',
          type: 'string',
        },
        {
          name: 'size',
          title: 'Size',
          type: 'string',
          description: 'Size of the hero.',
          initialValue: '100',
          options: {
            list: [
              { title: 'Full screen height', value: '100' },
              { title: 'Three-quarters of screen height', value: '75' },
              { title: 'Half screen height', value: '50' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          }
        },

      ]
    },
    {
      name: 'image',
      title: 'Image',
      hidden: ({ parent }) => parent.type !== 'fullwidth-image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'size',
          title: 'Size',
          type: 'string',
          description: 'Size of the image.',
          initialValue: 'masthead',
          options: {
            list: [
              { title: 'Masthead', value: 'masthead' },
              { title: 'Thin', value: 'thin' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          }
        },
      ]
    },
    {
      name: 'gallery',
      title: 'Gallery Assets',
      hidden: ({ parent }) => parent.type !== 'gallery',
      type: 'array',
      of: [
        {
          type: 'file',
          title: 'Video',
          name: 'video',
          accept: 'video/mp4',
        },
        {
          type: 'image',
          title: 'Image',
          name: 'image',
        },
      ]
    },
    {
      name: 'width',
      title: 'Column Width',
      description: 'Set the width of the two columns here. When there is only 1 column the width is always set to 100%.',
      type: 'string',
      hidden: ({ parent }) => parent.type !== 'columns' || !parent.columns || parent.columns.length < 2,
      initialValue: '50-50',
      options: {
        list: [
          { title: '70% / 30%', value: '70-30' },
          { title: '60% / 40%', value: '60-40' },
          { title: 'Equal width', value: '50-50' },
          { title: '40% / 60%', value: '40-60' },
          { title: '30% / 70%', value: '30-70' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'layout',
    },
    {
      name: 'order',
      title: 'Mobile Order',
      description: 'Which column should be displayed as first on mobile devices?',
      type: 'string',
      hidden: ({ parent }) => parent.type !== 'columns' || !parent.columns || parent.columns.length < 2,
      initialValue: 'first',
      options: {
        list: [
          { title: 'First', value: 'first' },
          { title: 'Second', value: 'second' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'layout',
    },
    {
      name: 'color',
      title: 'Background Color',
      type: 'colorlist',
      initialValue: '#ffffff',
      hidden: ({ parent }) => parent.type !== 'columns',
      options: {
        list: [
          { title: 'White', value: '#ffffff' },
          { title: 'Grey', value: '#e4e4e4' },
          { title: 'Green', value: '#1e4c55' },
          { title: 'Black', value: '#000000' },
        ]
      },
      fieldset: 'layout',
    },
    {
      name: 'align',
      title: 'Vertical Alignment',
      description: 'Set the vertical alignment of the column(s).',
      type: 'string',
      hidden: ({ parent }) => parent.type !== 'columns' || !parent.columns || parent.columns.length < 2,
      initialValue: 'center',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'bottom' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'alignment',
    },
    {
      name: 'justify',
      title: 'Horizontal Alignment',
      description: 'Set the horizontal alignment of the column(s).',
      type: 'string',
      hidden: ({ parent }) => parent.type !== 'columns' || !parent.columns || parent.columns.length < 2,
      initialValue: 'center',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'alignment',
    },
    {
      name: 'columns',
      title: 'Columns',
      description: 'Add each column in this block. You can have a maximum of two columns.',
      hidden: ({ parent }) => parent.type !== 'columns',
      validation: Rule => Rule.min(1) && Rule.max(2),
      type: 'array',
      of: [
        {
          type: 'column',
        }
      ],
      options: {
        editModal: 'fullscreen',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      columns: 'columns',
      image: 'image',
    },
    prepare ({ name, columns, type, image }) {
      const retrievePreview = () => {
        if (type === 'columns' && columns) {
          const [media] = columns.filter(column => column.image.asset);
          if (media && media.image) {
            return media.image;
          }
        }

        if (type === 'fullwidth-image' && image) {
          return image
        }

        return null
      }

      const media = retrievePreview();

      return {
        title: name,
        media,
        subtitle: typeDef[type],
      }
    }
  }
}
