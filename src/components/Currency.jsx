import React, { useState } from "react";
import styles from "./Currency.module.css";

const Currency = ({ overview }) => {
  const [amount, setAmount] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const numericAmount = amount === "" ? 0 : Number(amount);
  const converted = (numericAmount * overview.rate).toLocaleString("ko-KR", {
    maximumFractionDigits: 0,
  });

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <span className={styles.flag}>VND</span>
        <input
          className={styles.input}
          type="text"
          value={amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          onChange={handleInputChange}
          placeholder="10,000"
          inputMode="numeric"
        />
        <span className={styles.unitText}>₫</span>
      </div>

      <div className={styles.arrow}>≈</div>

      <div className={styles.resultGroup}>
        <span className={styles.flag}>KRW</span>
        <div className={styles.result}>
          {numericAmount > 0 ? converted : 500}
          <span className={styles.unitText}> 원</span>
        </div>
      </div>
    </div>
  );
};

export default Currency;
