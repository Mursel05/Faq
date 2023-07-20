import React from "react";
import Item from "./Item";

const Faq = () => {
  return (
    <div className="faq">
      <a href="/">Hey! Have any questions?</a>
      <h1>FAQ's</h1>
      <div className="items"><Item/></div>
    </div>
  )
};

export default Faq;
