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
    }
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
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
