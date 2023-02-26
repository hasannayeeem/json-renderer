import React from "react";
import exportStyle from "../utils/style.export";
function Title({ children, style, element }) {
  const Heading = element.level;
  const selector = `${Heading}${Math.random().toString(36).substring(2, 8)}`;
  exportStyle(selector, style)
  return (
    <Heading
    className={selector}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

export default Title;
