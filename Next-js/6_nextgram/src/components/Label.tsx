import React, { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text, ...props }) => {
  return (
    <label className="text-sm font-medium text-zinc-300 ml-2" {...props}>
      {text}
    </label>
  );
};

export default Label;
