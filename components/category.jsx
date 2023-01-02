import React from "react";

export default function Category({ setFilterWord, filterWord, category }) {
  return (
    <div
      onClick={() => setFilterWord(category)}
      className={`category ${filterWord === category && "categoryActive"}`}
    >
      {category[0].toUpperCase() + category.replace(category[0], "")}
    </div>
  );
}
