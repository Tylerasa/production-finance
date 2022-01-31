import React from "react";
import LargeGraph from "../../components/LargeGraph";

const StockItem = ({ graph }) => {
  let list = [];
  graph.chart.result[0].timestamp.map((ele, i) => {
    list.push({
      name: ele,
      uv: graph.chart.result[0].indicators.adjclose[0].adjclose[i]
    });
  });
  return (
    <div>
      <LargeGraph graphData={list} />
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
