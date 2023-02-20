import React from 'react'

function Text({children, style}) {
  return (
    <p style={{...style}}   dangerouslySetInnerHTML={{ __html: children }}/>
  )
}

export default Text