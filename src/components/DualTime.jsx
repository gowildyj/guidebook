import React, { useState, useEffect } from "react";
import styles from "./DualTime.module.css";

const DualTime = ({ overview }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    let intervalId;

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

    const timeoutId = setTimeout(() => {
      setNow(new Date());

      intervalId = setInterval(() => {
        setNow(new Date());
      }, 60000);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const timeOp = { hour: "2-digit", minute: "2-digit", hour12: false };
  const dateOp = { month: "short", day: "numeric", weekday: "short" };

  const krTime = now.toLocaleTimeString("ko-KR", {
    ...timeOp,
    timeZone: "Asia/Seoul",
  });
  const krDate = now.toLocaleDateString("ko-KR", {
    ...dateOp,
    timeZone: "Asia/Seoul",
  });

  const vnTime = now.toLocaleTimeString("ko-KR", {
    ...timeOp,
    timeZone: overview.timeZone,
  });
  const vnDate = now.toLocaleDateString("ko-KR", {
    ...dateOp,
    timeZone: overview.timeZone,
  });

  return (
    <div className={styles.dualClock}>
      <div className={styles.clockItem}>
        <span className={styles.cityTag}>{overview.locationName}</span>
        <div className={styles.timeWrap}>
          <span className={styles.date}>{vnDate}</span>
          <span className={styles.time}>{vnTime}</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.clockItem}>
        <span className={styles.cityTag}>서울</span>
        <div className={styles.timeWrap}>
          <span className={styles.date}>{krDate}</span>
          <span className={styles.time}>{krTime}</span>
        </div>
      </div>
    </div>
  );
};

export default DualTime;
