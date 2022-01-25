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

const initialData = [
  {
    name: 1643121000,
    uv: 4345.02,
  },
  {
    name: 1643121300,
    uv: 4348.12,
  },
  {
    name: 1643121600,
    uv: 4337.32,
  },
  {
    name: 1643121900,
    uv: 4314.78,
  },
  {
    name: 1643122200,
    uv: 4299.53,
  },
  {
    name: 1643122500,
    uv: 4304.51,
  },
  {
    name: 1643122800,
    uv: 4291.67,
  },
  {
    name: 1643123100,
    uv: 4299.99,
  },
  {
    name: 1643123400,
    uv: 4310.79,
  },
  {
    name: 1643123700,
    uv: 4314.2,
  },
  {
    name: 1643124000,
    uv: 4310.9,
  },
  {
    name: 1643124300,
    uv: 4337.42,
  },
  {
    name: 1643124600,
    uv: 4334.99,
  },
  {
    name: 1643124900,
    uv: 4327.99,
  },
  {
    name: 1643125200,
    uv: 4341.85,
  },
  {
    name: 1643125500,
    uv: 4351.51,
  },
  {
    name: 1643125800,
    uv: 4337.22,
  },
  {
    name: 1643126100,
    uv: 4325.32,
  },
  {
    name: 1643126400,
    uv: 4330.3,
  },
  {
    name: 1643126700,
    uv: 4321.11,
  },
  {
    name: 1643127000,
    uv: 4316.26,
  },
  {
    name: 1643127300,
    uv: 4333.5,
  },
  {
    name: 1643127600,
    uv: 4336.28,
  },
  {
    name: 1643127900,
    uv: 4335.72,
  },
  {
    name: 1643128200,
    uv: 4325.24,
  },
  {
    name: 1643128500,
    uv: 4311.39,
  },
  {
    name: 1643128800,
    uv: 4316.55,
  },
  {
    name: 1643129100,
    uv: 4323.37,
  },
  {
    name: 1643129400,
    uv: 4331.33,
  },
  {
    name: 1643129700,
    uv: 4312.29,
  },
  {
    name: 1643130000,
    uv: 4322.12,
  },
  {
    name: 1643130300,
    uv: 4330.34,
  },
  {
    name: 1643130600,
    uv: 4331.56,
  },
  {
    name: 1643130900,
    uv: 4327.56,
  },
  {
    name: 1643131200,
    uv: 4337.08,
  },
  {
    name: 1643131500,
    uv: 4337.6,
  },
  {
    name: 1643131800,
    uv: 4325.95,
  },
  {
    name: 1643132100,
    uv: 4328.35,
  },
  {
    name: 1643132400,
    uv: 4329.77,
  },
  {
    name: 1643132700,
    uv: 4320.51,
  },
  {
    name: 1643133000,
    uv: 4321.75,
  },
  {
    name: 1643133300,
    uv: 4328.46,
  },
  {
    name: 1643133600,
    uv: 4322.92,
  },
  {
    name: 1643133900,
    uv: 4323.26,
  },
  {
    name: 1643134200,
    uv: 4329.77,
  },
  {
    name: 1643134500,
    uv: 4334.76,
  },
  {
    name: 1643134800,
    uv: 4333.2,
  },
  {
    name: 1643135100,
    uv: 4349.29,
  },
  {
    name: 1643135400,
    uv: 4355.15,
  },
  {
    name: 1643135700,
    uv: 4357.86,
  },
  {
    name: 1643136000,
    uv: 4357.47,
  },
  {
    name: 1643136300,
    uv: 4366.61,
  },
  {
    name: 1643136600,
    uv: 4373.67,
  },
  {
    name: 1643136900,
    uv: 4377.48,
  },
  {
    name: 1643137200,
    uv: 4369.16,
  },
  {
    name: 1643137500,
    uv: 4367.68,
  },
  {
    name: 1643137800,
    uv: 4382.45,
  },
  {
    name: 1643138100,
    uv: 4387.05,
  },
  {
    name: 1643138400,
    uv: 4388.08,
  },
  {
    name: 1643138700,
    uv: 4387.89,
  },
  {
    name: 1643139000,
    uv: 4377.17,
  },
  {
    name: 1643139300,
    uv: 4385.55,
  },
  {
    name: 1643139600,
    uv: 4397.63,
  },
  {
    name: 1643139900,
    uv: 4397.48,
  },
  {
    name: 1643140200,
    uv: 4403.71,
  },
  {
    name: 1643140500,
    uv: 4409.71,
  },
  {
    name: 1643140800,
    uv: 4399.73,
  },
  {
    name: 1643141100,
    uv: 4388.75,
  },
  {
    name: 1643141400,
    uv: 4385.34,
  },
  {
    name: 1643141700,
    uv: 4397.4,
  },
  {
    name: 1643142000,
    uv: 4382.23,
  },
  {
    name: 1643142300,
    uv: 4367.19,
  },
  {
    name: 1643142600,
    uv: 4364.42,
  },
  {
    name: 1643142900,
    uv: 4373.18,
  },
  {
    name: 1643143200,
    uv: 4371.69,
  },
  {
    name: 1643143500,
    uv: 4367.87,
  },
  {
    name: 1643143800,
    uv: 4351.75,
  },
  {
    name: 1643144100,
    uv: 4358.03,
  },
  {
    name: 1643144400,
    uv: 4356.45,
  },
];

const graph = () => {
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
    console.log("Ref", ref);
    console.log("from", from);
    console.log("to", to);
    let [bottom, top] = [initialData[0][ref], initialData[0][ref]];

    initialData.forEach((d) => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  };
  return (
    <div className="highlight-bar-charts" style={{ userSelect: "none" }}>
      <button type="button" className="btn update" onClick={zoomOut}>
        Zoom Out
      </button>

      <LineChart
        width={800}
        height={400}
        data={initialData}
        onMouseDown={(e) => setRefAreaLeft(e.activeLabel)}
        onMouseMove={(e) => refAreaLeft && setRefAreaRight(e.activeLabel)}
        // eslint-disable-next-line react/jsx-no-bind
        onMouseUp={zoom}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDataOverflow
          dataKey="name"
          domain={[left, right]}
          type="number"
        />
        <YAxis
          allowDataOverflow
          domain={[bottom, top]}
          type="number"
          yAxisId="1"
        />
        <Tooltip />
        <Line
          yAxisId="1"
          type="natural"
          dataKey="uv"
          stroke="#8884d8"
          animationDuration={300}
        />
        <Line
          yAxisId="2"
          type="natural"
          dataKey="impression"
          stroke="#82ca9d"
          animationDuration={300}
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

export default graph;
