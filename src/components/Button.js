import React from 'react'
import exportStyle from '../utils/style.export'

function Button({children, style}) {
  const tagName = `button`;
  exportStyle({tagName}, style)
  return (
    <button>{children}</button>
  )
}

export default Button