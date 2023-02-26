import React, { useId } from "react";
import exportStyle from "../utils/style.export";

function Image({ attr, style, element }) {
  const date = new Date().getUTCMilliseconds().toString();
  const id = useId().replace(/:/g, `${date}`);
  const selector = element.type + id;
  exportStyle(selector, style)
  
  return (
    <img
      // style={{ ...style }}
      className={selector}
      src={attr.src}
      alt={attr.alt}
    />
  );
}

export default Image;
