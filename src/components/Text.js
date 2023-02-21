import React from "react";
import exportStyle from "../utils/style.export";

function Text({ children, style, element }) {
  const className = element.type;
  exportStyle({className}, style)
  return (
    <p
      // style={{ ...style }}
      className={className}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

export default Text;
