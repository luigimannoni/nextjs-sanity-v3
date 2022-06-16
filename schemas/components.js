import { SiDatabricks } from 'react-icons/si'
const componentTypes = {
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
  fields: [
    {
      name: 'name',
      title: 'Internal Name',
      description: 'This is the name that will be used to reference this component in the pages. Displayed on this dashboard only.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      description: 'Component type. Use content columns to build the page elements, the other options are decorative elements, usually used on the top of page.',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'columns',
      options: {
        list: Object.entries(componentTypes).map((entry) => ({
          title: entry.value, value: entry.key,
        })),
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
    },
    prepare ({ name, columns, type, image }) {
      const retrievePreview = () => {
        return null
      }

      const media = retrievePreview()

      return {
        title: name,
        media,
        subtitle: componentTypes[type],
      }
    },
  },
}
