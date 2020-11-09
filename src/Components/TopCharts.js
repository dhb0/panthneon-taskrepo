import React from "react";
import dataJSON from "../Datasets/topChart.json";
import { Card, ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";

const TopCharts = () => {
  const dataToDisplay = dataJSON[dataJSON.length - 1].apps.sort((a, b) =>
    a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0
  );
  console.log(dataJSON);
  return (
    <Card style={{ overFlow: "scroll" }}>
      <Card.Body>
        <Card.Title>Top Charts</Card.Title>
        <ListGroup variant="flush">
          {dataToDisplay.map((item, index) => {
            return <ListItem listData={item} key={index} index={index} />;
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TopCharts;
