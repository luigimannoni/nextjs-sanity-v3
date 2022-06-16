import React from 'react'
import Image from 'next/image'
import { urlForAsset } from '../../lib/assets'

export const heroSchema = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'asset',
      title: 'Hero asset',
      description: 'Video or image.',
      type: 'file',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Hero display title',
      description: 'First header.',
      type: 'string',
    },
  ],
}

export default function Hero({ text, asset }) {
  const { extension, url } = urlForAsset(asset)

  return (
    <section className="py-64">
      <h1 className="px-2">{text}</h1>
      {
        extension === 'webm' || extension === 'mp4' ? (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={url} type={`video/${extension}`} />
          </video>
        ) : (
          <Image alt={text} src={url} className="object-cover" />
        )
      }
    </section>
  )
}

