import React from "react";
import styles from "./Home.module.css";
import { tripData } from "@/data";

import ImageCard from "@/components/ImageCard";
import IconCard from "@/components/IconCard";
import DualTime from "@/components/DualTime";
import Currency from "@/components/Currency";

const Home = () => {
  const { menuData, overview } = tripData;

  return (
    <div className={styles.container}>
      <header className={styles.menuHeader}>
        <h1 className={styles.menuTitle}>
          <span>{overview.hello}</span>
        </h1>
        <DualTime overview={overview} />
        <Currency overview={overview} />
      </header>

      <div className={styles.menuContainer}>
        {menuData.map((item) => (
          <IconCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            direction="row"
          />
        ))}
      </div>

      {/* sample */}
    </div>
  );
};

export default Home;
