import React from "react";

function Subscription({ form }) {
  console.log("form", form, "style", form.style);
  return (
    <form style={{ ...form.style }}>
      {form.fields.items.map((field) => (
        <input
          name={field.name}
          label={field.label}
          placeholder={field.attr.placeholder}
        />
      ))}
      <button style={{ ...form.submitButton.style }}>
        {form.submitButton.content}
      </button>
    </form>
  );
}

export default Subscription;
