import React from 'react'

const BiggerStyle = ({children}) => (
  <span style={{fontSize: '1.4em'}}>{children}</span>
)

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Bigger', value: 'bigger', blockEditor: { render: BiggerStyle }},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   type: 'image',
    //   options: {hotspot: true}
    // }
    {
      name: 'break',
      type: 'object',
      title: 'Break',
      fields: [
        {
          name: 'style',
          type: 'string',
          options: {
            list: [
              'Line',
              'Invisible'
            ],
          }
        }
      ]
    },
    {
      name: 'icon',
      type: 'object',
      title: 'Icon paragraph',
      fields: [
        {
          name: 'style',
          type: 'string',
          options: {
            list: [
              'Address',
              'LinkedIn',
              'Twitter',
              'Facebook',
              'Instagram',
              'Email',
              'Phone'
            ],
          }
        },
        {
          name: 'text',
          type: 'string',
        },
        {
          name: 'link',
          type: 'string',
        }
      ]
    }
  ]
}
