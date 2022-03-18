import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import LargeGraph from "../../components/LargeGraph";
import { useRouter } from "next/router";
const StockItem = ({ graph }) => {
  const router = useRouter();

  
  let symbol = router.query.stock;

  console.log(graph);
  const [graphData, setGraphData] = useState();
  let list = [];
  graph.chart.result[0].timestamp.map((ele, i) => {
    list.push({
      name: ele,
      uv: graph.chart.result[0].indicators.adjclose[0].adjclose[i]
    });
  });
  const handleInterval = async (e) => {
    console.log("interval", e);
    console.log("symbol", symbol);
    const res = await fetch(
      `https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=1mo&symbol=${symbol}&range=${e}&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "yh-finance.p.rapidapi.com",
          "x-rapidapi-key": "7pgRqEtjPFmshPmiGLuLZBzW6s0Zp1tAgcSjsnqTz8xCOgR6W8"
        }
      }
    );
    const data = await res.json();
    console.log(data);
    setGraphData(data);
  };
  return (
    <div style={{ width: "1400px", margin: "auto", padding: "20px 0px" }}>
      <CustomSelect onAddInterval={(e) => handleInterval(e)} />
      <LargeGraph graphData={graphData} />
    </div>
  );
};

export default StockItem;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=1mo&symbol=${context.params.stock}&range=5y&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "7pgRqEtjPFmshPmiGLuLZBzW6s0Zp1tAgcSjsnqTz8xCOgR6W8"
      }
    }
  );
  const data = await res.json();
  return {
    props: { graph: data }
  };
};
