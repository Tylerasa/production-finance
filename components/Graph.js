import React, { useState } from "react";
import GraphItem from "./GraphItem";
import styles from "../styles/Graph.module.css";
import Link from "next/link";
const Graph = ({ graph }) => {
  var graphData = [];
  var list = [];
  console.log("graph", graph);

  const [graphState, setGraphState] = useState([]);
  graph.marketSummaryAndSparkResponse.result.slice(0, 5).map((ele) => {
    console.log(ele);
    ele.spark.close.map((element, i) => {
      graphData.push({
        name: ele.spark.timestamp[i],
        uv: element
      });
    });
    list.push(graphData);
    graphData = [];
  });

  graphData = [];
  return (
    <div className={styles.stockGraph}>
      {graph && list
        ? graph.marketSummaryAndSparkResponse.result
            .slice(0, 5)
            .map((ele, i) => {
              return (
                <Link
                  href={{
                    pathname: `/stock/${ele.exchange}`,
                    query: { object: JSON.stringify(list[i]) }
                  }}
                >
                  <div className={styles.graphItem}>
                    <p className={styles.graphText}>{ele.exchange}</p>
                    <GraphItem graphData={list[i]} />
                    <p className={styles.graphNumber}>
                      ({ele.regularMarketPreviousClose.fmt})
                    </p>
                  </div>
                </Link>
              );
            })
        : null}
    </div>
  );
};

export default Graph;
