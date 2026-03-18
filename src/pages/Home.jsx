import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Card from "@/components/Card";
import { menuData } from "@/data/menuData";

const Home = () => {
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
    timeZone: "Asia/Ho_Chi_Minh",
  });
  const vnDate = now.toLocaleDateString("ko-KR", {
    ...dateOp,
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return (
    <div className={styles.container}>
      <header className={styles.menuHeader}>
        <h1 className={styles.menuTitle}>
          <span>Xin chào 🇻🇳</span>
        </h1>

        <div className={styles.dualClock}>
          <div className={styles.clockItem}>
            <span className={styles.cityTag}>서울</span>
            <div className={styles.timeWrap}>
              <span className={styles.date}>{krDate}</span>
              <span className={styles.time}>{krTime}</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.clockItem}>
            <span className={styles.cityTag}>호치민</span>
            <div className={styles.timeWrap}>
              <span className={styles.date}>{vnDate}</span>
              <span className={styles.time}>{vnTime}</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.menuContainer}>
        {menuData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
