import React, { useState } from "react";
import GraphItem from "./GraphItem";

const Graph = ({ graph }) => {
  var graphData = [];
  var temp = [];
  console.log("graph", graph);

  const [graphState, setGraphState] = useState([]);
  graph.marketSummaryAndSparkResponse.result.slice(0, 5).map((ele) => {
    console.log(ele);
    ele.spark.close.map((element, i) => {
      graphData.push({
        name: ele.spark.timestamp[i],
        uv: element,
      });
    });
    temp = graphData;
    setGraphState([...graphState, temp.slice(0, 5)]);
    graphData = [];
  });
  console.log(graphState);

  graphData = [];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last Price</th>
            <th>Graph</th>
          </tr>
        </thead>
        <tbody>
          {graph && graphState
            ? graph.marketSummaryAndSparkResponse.result
                .slice(0, 5)
                .map((ele) => {
                  return (
                    <tr>
                      <td>{ele.symbol}</td>
                      <td>{ele.regularMarketPreviousClose.fmt}</td>
                      <td>
                        <GraphItem graphData={graphState} />
                      </td>
                    </tr>
                  );
                })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Graph;
