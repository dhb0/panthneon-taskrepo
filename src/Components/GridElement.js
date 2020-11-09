import React from "react";
import { Card } from "react-bootstrap";
import MainGraph from "./MainGraph";


const GridElement = () => {
  return (
    <Card style={{ overFlow: "scroll" }}>
      <Card.Body>
        <Card.Title>Rank History</Card.Title>
        <MainGraph />
      </Card.Body>
    </Card>
  );
};

export default GridElement;
