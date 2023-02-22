import React, { useId } from "react";
import exportStyle from "../utils/style.export";

function Input({ field, style }) {
  const date = new Date().getUTCMilliseconds().toString();
  const id = useId().replace(/:/g, `${date}`);
  const className = `input${id}`;
  exportStyle({ className }, style);
  return (
    <input
      name={field.name}
      className={className}
      placeholder={field.attr.placeholder}
    />
  );
}

export default Input;
