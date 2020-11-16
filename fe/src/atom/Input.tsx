import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return <input {...props} />;
}

export default Input;
