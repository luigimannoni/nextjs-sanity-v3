import { BsCardText } from 'react-icons/bs';

export default {
  name: 'column',
  title: 'Column',
  type: 'object',
  icon: BsCardText,
  fieldsets: [
    {
      name: 'layout',
      title: 'Layout',
      options: {
        collapsible: true,
        collapsed: true
      },
    },
  ],
  fields: [
    {
      name: 'type',
      title: 'Type',
      description: 'Block type. Please choose one of the options to show more settings.',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Image', value: 'image' },
          { title: 'Map', value: 'map'},
          { title: 'Video', value: 'video'},
        ],
      }
    },
    {
      name: 'width',
      title: 'Inner column width',
      type: 'number',
      fieldset: 'layout',
      initialValue: 100,
    },
    {
      name: 'align',
      title: 'Inner column alignment',
      type: 'string',
      fieldset: 'layout',
      initialValue: 'center',
      options: {
        list: [
          { title: 'Left', value: 'start' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'end'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => parent.type !== 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'shape',
          title: 'Image Shape',
          description: 'Select the shape of the image, if left blank it will keep its original shape.',
          type: 'string',
          initialValue: 'original',
          options: {
            list: [
              { title: 'Original', value: 'original' },
              { title: 'Cropped', value: 'crop' },
              { title: 'Square', value: 'square' },
              { title: 'Circle', value: 'circle' },
              { title: 'Donut', value: 'donut' },
            ]
          }
        },
        {
          name: 'offset',
          title: 'Offset',
          description: 'Margin offset between -10 and +10. A positive number will shunt down the image, a negative number will raise it.',
          type: 'number',
          initialValue: 0,
          validation: Rule => Rule.min(-10).max(10),
        },
        {
          name: 'parallax',
          title: 'Parallax',
          description: 'Parallax strength 0-10. Smaller the number more subtle the animation. 0 disables it.',
          type: 'number',
          initialValue: 0,
          validation: Rule => Rule.min(0).max(10),
        }
      ]
    },
    {
      name: 'text',
      title: 'Text',
      type: 'object',
      validation: Rule => Rule.required(),
      hidden: ({ parent }) => parent.type !== 'text',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'blockContent',
        },
        {
          name: 'align',
          title: 'Text Alignment',
          type: 'string',
          initialValue: 'left',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'right' },
            ],
            layout: 'radio',
            direction: 'horizontal',
          }
        },
      ],
    },
    {
      title: 'Map Location',
      name: 'location',
      type: 'geopoint',
      hidden: ({ parent }) => parent.type !== 'map',
    },
    {
      title: 'Asset',
      name: 'asset',
      type: 'file',
      accept: 'video/mp4',
      hidden: ({ parent }) => parent.type !== 'video',
    }
  ],
  preview: {
    select: {
      title: 'type',
      media: 'image',
    },
    prepare ({ title, media, subtitle }) {
      return {
        title: `${title.replace(/./, c => c.toUpperCase())} block`,
        media,
        // subtitle,
      }
    }
  }
}
