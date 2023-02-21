import React from 'react'
import exportStyle from '../utils/style.export';

function Form({children, style}) {
    const tagName = `form`;
    exportStyle({tagName}, style)
  return (
    <form>{children}</form>
  )
}

export default Form