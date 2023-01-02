import React from "react";

export function wordsLetters(wordsPrarent) {
  const letters = [];
  for (let i = 0; i < wordsPrarent.children.length; i++) {
    for (let j = 0; j < wordsPrarent.children[i].children.length; j++) {
      letters.push(wordsPrarent.children[i].children[j]);
    }
  }
  return letters;
}

export function wordsLettersJsx(sentence) {
  const words = sentence.split(" ");
  return (
    <>
      {words.map((word, key) => (
        <React.Fragment key={key}>
          <span
            style={{ display: "inline-block" }}
            key={key}
            className="word moving-element"
          >
            {word.split("").map((letter, key) => (
              <span
                className="letter moving-element"
                style={{ display: "inline-block" }}
                key={key}
              >
                {letter}
              </span>
            ))}
          </span>{" "}
        </React.Fragment>
      ))}
    </>
  );
}
