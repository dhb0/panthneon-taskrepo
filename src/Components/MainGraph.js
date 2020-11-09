import React from "react";
import "hammerjs";
import {
  Chart,
  ChartSeries,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeriesItem,
  ChartTooltip,
  ChartValueAxisItem,
  ChartValueAxis,
} from "@progress/kendo-react-charts";
import nest from "d3-collection/src/nest";
import dataJSON from "../Datasets/topChart.json";

const arrToMutate = JSON.parse(JSON.stringify(dataJSON));

for (let i = 0; i < arrToMutate.length; i++) {
  arrToMutate[i].apps.forEach((item) => (item.date = arrToMutate[i].date));
}
let graphData = [];
for (let j = 0; j < arrToMutate.length; j++) {
  graphData.push(...arrToMutate[j].apps);
}
let dataByID = nest()
  .key(function (d) {
    return d.id;
  })
  .entries(graphData);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Dec",
];
let dayList = dataJSON.map(
  (item) =>
    `${new Date(item.date).getDate()} ${months[new Date(item.date).getMonth()]}`
);

const ChartContainer = () => {
  const defaultTooltipRender = ({ point }) => {
    return (
      <div className="text-center">
        {graphData[point.series.index].name} <br />
        <small>{point.category}</small>, {point.value}
      </div>
    );
  };
  return (
    <Chart>
      <ChartValueAxis>
        <ChartValueAxisItem
          min={0}
          max={11}
          majorGridLines={{ visible: false }}
          reverse={true}
        />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          categories={dayList}
          startAngle={45}
          line={{ visible: false }}
        />
      </ChartCategoryAxis>
      <ChartTooltip render={defaultTooltipRender} />
      <ChartSeries yAxis={{ reverse: true }}>
        {dataByID.map((item, index) => {
          return (
            <ChartSeriesItem
              key={index}
              type="line"
              data={item.values.map((item2) => item2.rank)}
              tooltip={{ visible: true }}
            />
          );
        })}
      </ChartSeries>
    </Chart>
  );
};

export default ChartContainer;
