import React from "react";

export const OutputContainer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <div className="wuire-content" {...props}>
      {children}
    </div>
  );
};
