import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Graph = ({ graph }) => {
  var graphData = [];
  console.log("graph", graph);
  graph.marketSummaryAndSparkResponse.result[0].spark.close.map(
    (element, i) => {
      graphData.push({
        name: graph.marketSummaryAndSparkResponse.result[0].spark.timestamp[i],
        uv: element,
      });
    }
  );
  console.log(graphData);
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
          {graph && graphData
            ? graph.marketSummaryAndSparkResponse.result
                .slice(0, 5)
                .map((ele) => {
                  return (
                    <tr>
                      <td>{ele.symbol}</td>
                      <td>{ele.regularMarketPreviousClose.fmt}</td>
                      <td>
                        <AreaChart
                          width={300}
                          height={200}
                          data={graphData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                          baseValue={3000}
                        >
                          {/* <CartesianGrid strokeDasharray="3 3" /> */}
                          <XAxis dataKey="name"  interval="preserveStartEnd" />
                          {/* <YAxis /> */}
                          <YAxis   interval="preserveStart"  type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
                          <Tooltip />
                          <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#8884d8"
                            fill="#8884d8"
                          />
                        </AreaChart>
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
