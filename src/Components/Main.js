import React from "react";
import GridContainer from "./GridContainer";
import TopCharts from "./TopCharts";
import TrackedApps from "./TrackedApps";
import AppSuggestions from "./AppSuggestions";
import GridElement from "./GridElement";
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
        <Route path="/graph" component={GridElement} />
    </div>
    </BrowserRouter>
  );
};

export default Main;
