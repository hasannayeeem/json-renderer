import React from "react";
import uniqueId from "../utils/getUniqueKey";
import exportStyle from "../utils/style.export";
function Title({ children, style, element }) {
  const Heading = element.level;
  const selector = uniqueId();
  exportStyle(selector, style)
  return (
    <Heading
    className={selector}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}

export default Title;
