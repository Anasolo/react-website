import React, { useEffect, useState } from "react";
import Article from "../Article";
import Recipe from "../Recipe";

const Card = ({ item }) => {
  const [active, setActive] = useState(true);

  const goTo = () => {
    setActive(false);
  };

  const style = { marginRight: "25px" };
  useEffect(() => {
    console.log("hi", item);
  }, []);
  return (
    <div style={style}>
      <div>
        {active ? (
          <Article
            img={item.img}
            name={item.name}
            text={item.text}
            onClick={() => goTo()}
          />
        ) : (
          <Recipe setActive={setActive} name={item.name} recipe={item.recipe} />
        )}
      </div>
    </div>
  );
};
export default Card;
