import React from 'react'

import Hero from './sanity/Hero'

// may need to work on mapping <-- also make this a lib function
const Comps = {
  'hero': Hero,
}

export default function Components({ components }) {

  return (
    <>
      {components.length > 0 && components.map((component) => {
        const { type, _id } = component
        const Comp = Comps[type]
        if (!Comp) {
          console.warn(`Component type ${type} not found/exported.`)
          return null
        }
        return (<Comp key={_id} {...component} />)
      })}
    </>
  )
}