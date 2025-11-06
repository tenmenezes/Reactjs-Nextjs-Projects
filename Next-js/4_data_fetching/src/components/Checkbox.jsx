"use client";

import { useState } from "react";

const Checkbox = ({ initialChecked, formId }) => {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <input
      type="checkbox"
      checked={checked}
      className="w-5"
      onChange={(e) => {
        setChecked(e.target.checked);
        // dispara o form
        document.getElementById(formId).requestSubmit();
      }}
    />
  );
};

export default Checkbox;
