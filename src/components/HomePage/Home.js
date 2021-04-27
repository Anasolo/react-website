import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";
import { Button, Form, Row, Col } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);
  const [buttonActive, setbuttonActive] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // useEffect example

  // useEffect(async () => {
  //   console.log("sensei");
  //   var data = await axios.get(
  //     "https://jsonplaceholder.typicode.com/photos?_limit=20"
  //   );
  //   console.log("hi", data.data);
  //   setData(data.data);
  // }, []);

  const getData = async (name) => {
    console.log("ana", quantity);
    setButtonLoader(true);
    var data = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=${quantity}`
    );
    console.log("hi", data.data);
    setData(data.data);
    setbuttonActive(false);
    setButtonLoader(false);
  };
  const setValue = (e) => {
    console.log("avto", e);
    setQuantity(e);
  };
  return (
    <div>
      <div>
        <Row style={{ marginLeft: "200px" }}>
          <Col md={3}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control
                as="select"
                onChange={(e) => setValue(e.currentTarget.value)}
              >
                <option>Select Quantity</option>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Button
              style={{ marginLeft: "200px" }}
              onClick={() => getData()}
              variant="info"
              disabled={buttonLoader}
            >
              {buttonLoader ? "Loading..." : "Get Data"}
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "200px" }}>
        {data.map((item) => (
          <div>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
