import React from "react";

export function Suggestion({ data, selected, onClick }) {
  const handleClick = () => onClick(data);

  return (
    <li
      className={`suggestion ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {data.handle}
    </li>
  );
}
