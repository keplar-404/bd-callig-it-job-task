import React from "react";

// @ts-ignore
export default function Button({ children,  className, ...props }) {
  return (
    <button className={`${className} btn `} {...props}>
      {children}
    </button>
  );
}
