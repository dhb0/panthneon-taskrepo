import React from "react";
import GridLayout from "react-grid-layout";
import GridElement from "./GridElement";
import AppSuggestions from "./AppSuggestions";
import TopCharts from "./TopCharts";
import TrackedApps from "./TrackedApps";

const GridContainer = () => {

  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 2 },
    { i: "b", x: 6, y: 0, w: 6, h: 2 },
    { i: "c", x: 0, y: 2, w: 6, h: 2 },
    { i: "d", x: 6, y: 2, w: 6, h: 2 },
  ];
  return (
    <GridLayout
      className="layout m-4"
      layout={layout}
      cols={12}
      rowHeight={150}
      width={1200}
    >
      <div key="a" style={{ overflow: "hidden" }}>
        <TopCharts />
      </div>
      <div key="b" style={{ overflow: "hidden" }}>
        <TrackedApps />
      </div>
      <div key="c" style={{ overflow: "hidden" }}>
        <AppSuggestions />
      </div>
      <div key="d" style={{ overflow: "hidden" }}>
        <GridElement />
      </div>
    </GridLayout>
  );
};

export default GridContainer;
