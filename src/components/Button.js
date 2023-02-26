import React from 'react'
import uniqueId from '../utils/getUniqueKey';
import exportStyle from '../utils/style.export'

function Button({children, style}) {
  const selector = uniqueId();
  exportStyle(selector, style)
  return (
    <button className={selector}>{children}</button>
  )
}

export default Button