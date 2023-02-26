import React from 'react'
import uniqueId from '../utils/getUniqueKey';
import exportStyle from '../utils/style.export';

function Form({children, style}) {
    const selector = uniqueId();
    exportStyle(selector, style)
  return (
    <form className={selector}>{children}</form>
  )
}

export default Form