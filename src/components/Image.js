import React, { useId } from "react";
import exportStyle from "../utils/style.export";

function Image({ attr, style, element }) {
  const date = new Date().getUTCMilliseconds().toString();
  const id = useId().replace(/:/g, `${date}`);
  const className = element.type + id;
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
