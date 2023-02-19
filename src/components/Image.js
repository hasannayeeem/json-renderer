import React from 'react'

function Image({attr, style}) {
    console.log(style, 'image');
  return (
    <img style={{...style}} src={attr.src} alt={attr.alt}/>
  )
}

export default Image