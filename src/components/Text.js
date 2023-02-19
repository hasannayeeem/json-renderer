import React from 'react'

function Text({children, style}) {
    console.log(style, 'text');
  return (
    <div style={{...style}}>{children}</div>
  )
}

export default Text