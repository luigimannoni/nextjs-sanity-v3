import { BsMenuButtonWideFill as icon } from 'react-icons/bs';

export default {
  name: 'nav',
  title: 'Nav',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Navigation name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Main Navigation', value: 'main' },
          { title: 'Footer', value: 'footer' },
          { title: 'Disabled', value: 'disabled' },
        ]
      },
      initialValue: 'main',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'pages' } }],
      validation: Rule => Rule.required()
    },
  ]
}
