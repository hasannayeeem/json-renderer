import React from 'react'

function Image({attr, style}) {
  return (
    <img style={{...style}} src={attr.src} alt={attr.alt}/>
  )
}

export default Image