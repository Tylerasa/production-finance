import React from "react";
import { useRouter } from "next/router";
import GraphItem from "../../components/GraphItem";

const StockItem = () => {
  const router = useRouter();
  console.log(JSON.parse(router.query.object));
  return (
    <div>
      <GraphItem graphData={JSON.parse(router.query.object)} />
    </div>
  );
};

export default StockItem;
