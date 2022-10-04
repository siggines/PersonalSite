import React, { useState } from "react";

type ExpanderProps = {
  children(expanded: boolean): React.ReactNode;
  className: string;
};

export const Expander: React.FC<ExpanderProps> = ({ children, className }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setExpanded(!expanded);
  };

  return (
    <button className={className} onClick={handleClick}>
      {children(expanded)}
    </button>
  );
};
