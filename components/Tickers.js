import React from "react";

const Tickers = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="tableHeader">Symbol</th>
            <th className="tableHeader">Last Price</th>
            <th className="tableHeader">Change</th>
            <th className="tableHeader">% Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tickers;
