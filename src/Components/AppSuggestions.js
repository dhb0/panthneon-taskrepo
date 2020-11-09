import React from "react";
import dataJSON from "../Datasets/appSuggestions.json";
import {Card, ListGroup} from "react-bootstrap";
import ListItem from './ListItem'

const AppSuggestions = () => {
  
  return <Card style={{ overFlow: "scroll" }}>
  <Card.Body>
    <Card.Title>App Suggestions</Card.Title>
    <ListGroup variant="flush">
      {
        dataJSON.map((item,index)=>{
          return <ListItem listData={item} key={index} index={index}/>
        })
      }
    </ListGroup>
  </Card.Body>
</Card>
};

export default AppSuggestions;
