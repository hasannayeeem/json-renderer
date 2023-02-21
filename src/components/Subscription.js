import React from "react";
import Button from "./Button";
import Form from "./Form";

function Subscription({ form }) {
  console.log("form", form, "style", form.style);
  return (
    <Form style={form.style}>
      {form.fields.items.map((field) => (
        <input
          style={{...form.fields.style}}
          name={field.name}
          label={field.label}
          placeholder={field.attr.placeholder}
        />
      ))}
      <Button style={form.submitButton.style}>
        {form.submitButton.content}
      </Button>
    </Form>
  );
}

export default Subscription;
