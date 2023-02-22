import React from "react";
import exportStyle from "../utils/style.export";
function Title({ children, style, element }) {
  const Heading = element.level;
  const tagName = Heading;
  exportStyle({tagName}, style)
  return (
    <Heading
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

export default Title;
