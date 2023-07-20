import React from "react";

const Addition = ({ block }) => {
  return (
    <div className="addition-line">
      <hr />
      <div className="addition">
        <p>{block.text}</p>
        <div>
          <div className="links">
            <img src="images/icons8-dot-50.png" alt="" />
            <span>{block.linkBir}</span>
          </div>
          <div className="links">
            <img src="images/icons8-dot-50.png" alt="" />
            <span>{block.linkIki}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addition;
