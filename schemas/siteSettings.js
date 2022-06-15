import { BiCog } from 'react-icons/bi';

export default {
  icon: BiCog,
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Used on the browser and title bar, as well for SEO purposes.',
    },
    {
      name: 'titlemeta',
      title: 'Short Meta Title',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Used as a Title metatag for for social media and SEO.',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      validation: Rule => Rule.required(),
      description: 'Description for SEO engines, this will be appended in the metadata of everypage.',
    },
    {
      name: 'seoimage',
      title: 'Default SEO Image',
      type: 'image',
      validation: Rule => Rule.required(),
      description: 'Default image for SEO, this will be used as a fallback if the page does not have a SEO image set.',
    },
    {
      name: 'footerimage',
      title: 'Default Footer Image',
      type: 'image',
      validation: Rule => Rule.required(),
      description: 'Default image for the closing footer image at every page.',
    },
    {
      name: 'footercopy',
      title: 'Footer Copy',
      type: 'blockContent',
    },
    {
      name: 'footeraddress',
      title: 'Footer Address',
      type: 'blockContent',
    },
    {
      name: 'contact',
      title: 'Site Contact E-mail',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Contact e-mail for the website. Links the footer "Contact us" button to this e-mail.',
    }
  ]
}