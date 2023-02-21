import React from "react";
import exportStyle from "../utils/style.export";

function Image({ attr, style, element }) {
  const className = element.type;
  exportStyle({className}, style)
  return (
    <img
      // style={{ ...style }}
      className={className}
      src={attr.src}
      alt={attr.alt}
    />
  );
}

export default Image;
