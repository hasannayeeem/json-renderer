import React from "react";
import exportStyle from "../utils/style.export";
import uniqueId from '../utils/getUniqueKey';

function Text({ children, style, element }) {
  const selector = element.type + uniqueId();
  exportStyle(selector, style)
  return (
    <p
      // style={{ ...style }}
      className={selector}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

export default Text;
