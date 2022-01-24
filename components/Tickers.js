import React from "react";
import styles from "../styles/Tickers.module.css";
const Tickers = ({ tickers }) => {
  console.log(tickers);
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
          {tickers
            ? tickers.finance.result[0].quotes.slice(0, 5).map((ele) => {
                return (
                  <tr className={`${styles.tickerItem} `}>
                    <td className={`${styles.tickerSymbol}`}>{ele.symbol} </td>
                    <td>
                      {Math.round(
                        (ele.regularMarketPreviousClose + Number.EPSILON) * 100
                      ) / 100}
                    </td>
                    <td
                      className={
                        Math.sign(ele.regularMarketChange) === 1
                          ? `${styles.tickerGreen}`
                          : `${styles.tickerRed}`
                      }
                    >
                      {Math.round(
                        (ele.regularMarketChange + Number.EPSILON) * 100
                      ) / 100}
                    </td>
                    <td
                      className={
                        Math.sign(ele.regularMarketChangePercent) === 1
                          ? `${styles.tickerGreen}`
                          : `${styles.tickerRed}`
                      }
                    >
                      {Math.round(
                        (ele.regularMarketChangePercent + Number.EPSILON) * 100
                      ) / 100}
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

export default Tickers;
