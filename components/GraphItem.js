import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
} from "recharts";
const GraphItem = ({graphData}) => {
  const [left, setLeft] = useState("dataMin");
  const [right, setRight] = useState("dataMax");
  const [refAreaLeft, setRefAreaLeft] = useState("dataMin");
  const [refAreaRight, setRefAreaRight] = useState("dataMax");
  const [top, setTop] = useState("dataMax+1");
  const [bottom, setBottom] = useState("dataMax-1");
  const [top2, setTop2] = useState("dataMax+20");
  const [bottom2, setBottom2] = useState("dataMax-20");
  const [animation, setAnimation] = useState(true);


  function zoom() {
    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setRefAreaLeft("");
      setRefAreaRight("");
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight) {
      setRefAreaLeft(refAreaRight);
      setRefAreaRight(refAreaLeft);
    }

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "uv", 1);

    setRefAreaRight("");
    setRefAreaLeft("");
    setLeft(refAreaLeft);
    setRight(refAreaRight);
    setBottom(bottom);
    // setBottom2(bottom2);
    setTop(top);
    // setTop2(top2);
  }

  function zoomOut() {
    setRefAreaRight("");
    setRefAreaLeft("");
    setLeft("dataMin");
    setRight("dataMax");
    setTop("dataMax+1");
    setTop2("dataMax+50");
    setBottom("dataMin");
    setBottom2("dataMin+50");
  }

  const getAxisYDomain = (from, to, ref, offset) => {
    let [bottom, top] = [graphData[0][ref], graphData[0][ref]];

    graphData.forEach((d) => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  };

  return (
    <div style={{width: "140px", height: "50px"}}>
      <LineChart
        width={140}
        height={70}
        data={graphData}
        onMouseDown={(e) => setRefAreaLeft(e.activeLabel)}
        onMouseMove={(e) => refAreaLeft && setRefAreaRight(e.activeLabel)}
        onMouseUp={zoom}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          allowDataOverflow
          dataKey="name"
          domain={[left, right]}
          type="number"
          tick={false}
        />
        <YAxis
          allowDataOverflow
          domain={[bottom, top]}
          type="number"
          yAxisId="1"
          tick={false}
        />
        {/* <Tooltip /> */}
        <Line
          yAxisId="1"
          type="natural"
          dataKey="uv"
          stroke="#8884d8"
          animationDuration={300}
          dot={false}
        />

        {refAreaLeft && refAreaRight ? (
          <ReferenceArea
            yAxisId="1"
            x1={refAreaLeft}
            x2={refAreaRight}
            strokeOpacity={0.3}
          />
        ) : null}
      </LineChart>
    </div>
  );
};

export default GraphItem;
