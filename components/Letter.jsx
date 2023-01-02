import React, { memo } from "react";

const Letter = ({ letter, index }) => {
  const scaleValues = [1.1, 0.5, 0.7, 1.3, 1.15, 1.5];
  const colors = [
    "#FDEEDC",
    "#EFD345",
    "#F1A661",
    "#BABD42",
    "#FF597B",
    "#9EB23B",
    "#F9B5D0",
    "#FF8E9E",
  ];
  return (
    <span
      className="letter moving-element"
      style={{
        display: "inline-block",
        color: colors[Math.floor(Math.random() * colors.length)],
        transform: `scale(${
          scaleValues[Math.floor(Math.random() * scaleValues.length)]
        }) rotate(${Math.floor(Math.random() * 360)}deg)
                    translate(${
                      index % 2 === 0
                        ? Math.floor(400 + Math.random() * 100) * -1
                        : Math.floor(400 + Math.random() * 100)
                    }%, ${
          index % 2 === 0
            ? Math.floor(400 + Math.random() * 100)
            : Math.floor(400 + Math.random() * 100) * -1
        }%)
                    `,
      }}
    >
      {letter}
    </span>
  );
};
export default memo(Letter);
