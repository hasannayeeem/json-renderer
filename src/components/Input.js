import React, { useId } from "react";
import exportStyle from "../utils/style.export";

function Input({ field, style }) {
  const date = new Date().getUTCMilliseconds().toString();
  const id = useId().replace(/:/g, `${date}`);
  const selector = `input${id}`;
  exportStyle(selector, style);
  return (
    <input
      name={field.name}
      className={selector}
      placeholder={field.attr.placeholder}
    />
  );
}

export default Input;
