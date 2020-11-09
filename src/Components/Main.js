import React from "react";
import GridContainer from "./GridContainer";
import TopCharts from "./TopCharts";
import TrackedApps from "./TrackedApps";
import AppSuggestions from "./AppSuggestions";
import MainGraph from "./MainGraph";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Main = () => {
  return (
    <BrowserRouter>
    <div className="container-fluid main">
      <header>
        <h3>Dashboard</h3>
      </header>
        <Route exact path="/" component={GridContainer} />
        <Route path="/topcharts" component={TopCharts} />
        <Route path="/trackedapps" component={TrackedApps} />
        <Route path="/appsuggestions" component={AppSuggestions} />
        <Route path="/maingraph" component={MainGraph} />
    </div>
    </BrowserRouter>
  );
};

export default Main;
