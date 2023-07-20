import React, { useState } from "react";
import Circle from "./Circle";
import Addition from "./Addition";
import Questions from "./Questions";

const Item = () => {
  const [questions, setQuestions] = useState(Questions);

  const openDiv = (id) => {
    setQuestions((questions) =>
      questions.map((block) =>
        id === block.id
          ? {
              ...block,
              transition:
                block.transition === "transform-one"
                  ? "transform-two"
                  : "transform-one",
              transform:
                block.transform === "transform-three item"
                  ? "transform-four item"
                  : "transform-three item",
              addition: !block.addition,
            }
          : {
              ...block,
              transition:
                block.transition === "transform-one"
                  ? "transform-two"
                  : "",
              transform:
                block.transform === "transform-three item"
                  ? "transform-four item"
                  : "item",
              addition: false,
            }
      )
    );
  };


  return questions.map((block) => {
    return (
      <div className={block.transform}>
        <div className="main">
          <div className="question">
            <Circle>{block.id}</Circle>
            <span>{block.question}</span>
          </div>
          <img
            src="images/icons8-collapse-arrow-32 (1).png"
            alt="icon"
            onClick={() => {
              openDiv(block.id);
            }}
            className={block.transition}
          />
        </div>
        <div>
          {block.addition === true ? <Addition block={block} /> : ""}
        </div>
      </div>
    );
  });
};

export default Item;
