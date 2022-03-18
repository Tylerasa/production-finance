import React, { useState } from "react";
import styles from "../styles/CustomSelect.module.css";
const CustomSelect = ({ onAddInterval }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div onClick={() => setShow(!show)} className={styles.selectWrapper}>
        <p>5 yrs</p>
        {!show ? (
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        ) : (
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        )}
      </div>
      {show ? (
        <div className={styles.dropdown}>
          <div
            onClick={() => onAddInterval("10y")}
            className={styles.dropdownItem}
          >
            10 yrs
          </div>
          <div
            onClick={() => onAddInterval("5y")}
            className={styles.dropdownItem}
          >
            5 yrs
          </div>
          <div
            onClick={() => onAddInterval("2y")}
            className={styles.dropdownItem}
          >
            2 yrs
          </div>
          <div
            onClick={() => onAddInterval("1y")}
            className={styles.dropdownItem}
          >
            1 yr
          </div>
          <div
            onClick={() => onAddInterval("6mo")}
            className={styles.dropdownItem}
          >
            6 months
          </div>
          <div
            onClick={() => onAddInterval("3mo")}
            className={styles.dropdownItem}
          >
            3 months
          </div>
          <div
            onClick={() => onAddInterval("1mo")}
            className={styles.dropdownItem}
          >
            3 months
          </div>
          <div
            onClick={() => onAddInterval("5d")}
            className={styles.dropdownItem}
          >
            5 days
          </div>
          <div
            onClick={() => onAddInterval("1d")}
            className={styles.dropdownItem}
          >
            1 day
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CustomSelect;
