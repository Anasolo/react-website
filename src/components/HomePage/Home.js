import React, { useState } from "react";
import Card from "./card";

const Home = () => {
  const [data, setData] = useState([
    {
      img:
        "https://image.freepik.com/free-photo/cappuccino-coffee-glass-with-spoon-wooden-table_23-2147908372.jpg",
      name: "Capuccino",
      text: "click for recipe",
      recipe: "this is a recipe",
    },
    {
      img:
        "https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg",
      name: "Latte",
      text: "click for recipe",
      recipe: "this is a recipe",
    },
    {
      img:
        "https://post.healthline.com/wp-content/uploads/2020/08/espresso-ground-coffee-beans-thumb-1-732x549.jpg",
      name: "Americano",
      text: "click for recipe",
      recipe: "this is a recipe",
    },
  ]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "200px" }}>
      {data.map((item) => (
        <div>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};
export default Home;
