import { Power4, TweenMax } from "gsap";
import React, { memo, useEffect, useRef } from "react";
import Letter from "./Letter";
import { wordsLetters } from "./words_letters";

function TitleWord() {
  let title = useRef(null);
  useEffect(() => {
    TweenMax.staggerTo(wordsLetters(title), 4, {
      x: 0,
      opacity: 1,
      scale: 1,
      color: "#333",
      rotate: 1,
      y: 0,
      delay: 0.2,
      ease: Power4.easeInOut,
      stagger: {
        each: 0.02,
        from: "random",
      },
    });
  }, []);
  return (
    <h1 ref={(e) => (title = e)}>
      <>
        {"Simple and Tasty Recipes".split(" ").map((word, key) => {
          return (
            <React.Fragment key={key}>
              <span
                style={{
                  display: "inline-block",
                }}
                key={key}
                className="word moving-element"
              >
                {word.split("").map((letter, key) => (
                  <Letter key={key} index={key} letter={letter} />
                ))}
              </span>{" "}
            </React.Fragment>
          );
        })}
      </>
    </h1>
  );
}
export default memo(TitleWord);
