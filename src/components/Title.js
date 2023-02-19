import React from 'react'

function Title({children, style}) {
    // console.log(JSON.parse(children),'children');
    console.log(style, 'title');
  return (
    <div style={{...style}}>{children}</div>
  )
}

export default Title