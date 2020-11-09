import React from "react";
import ListItem from './ListItem'
import { Card, ListGroup } from "react-bootstrap";
import dataJSON from "../Datasets/trackedApps.json";


const TrackedApps = () => {

  return (
    <Card style={{ overFlow: "scroll" }}>
      <Card.Body>
        <Card.Title>Tracked Apps</Card.Title>
        <ListGroup variant="flush">

          {
            dataJSON.map((item,index)=>{
              return <ListItem key={index} index={index} listData={item} />
            })
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TrackedApps;
