import React from "react";
import exportStyle from "../utils/style.export";

function Text({ children, style, element }) {
  const selector = element.type;
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
