import React from "react";
import { Col } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "@progress/kendo-theme-default/dist/all.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

const App = () => {
  return (
    <div className="App row no-gutters">
      <Col md={1} sm={1} className="nav-container">
        <Navbar />
      </Col>
      <Col md={11} sm={11}>
        <Main />
      </Col>
    </div>
  );
};

export default App;
