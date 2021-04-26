import React, { useEffect, useState } from "react";

const Article = (props) => {
  useEffect(() => {}, []);

  const myFun = () => {
    props.onClick();
  };
  return (
    <div className="article" onClick={myFun}>
      <img src={props.img} alt="coffee" />
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </div>
  );
};
export default Article;
