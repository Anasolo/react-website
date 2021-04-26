import React, { useEffect, useState } from "react";
import Article from "../Article";
import Recipe from "../Recipe";

const Card = ({ item }) => {
  const [active, setActive] = useState(true);

  const goTo = () => {
    setActive(false);
  };

  const style = { marginRight: "25px" };

  useEffect(() => {}, []);

  return (
    <div style={style}>
      <div>
        {active ? (
          <Article
            img={item.url}
            name={item.title.substring(0, 10)}
            text={item.text}
            onClick={() => goTo()}
          />
        ) : (
          <Recipe setActive={setActive} recipe={item.title} />
        )}
      </div>
    </div>
  );
};
export default Card;
