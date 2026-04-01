import React from "react";
import styles from "./Home.module.css";
import { tripData } from "@/data";

import FullImageCard from "@/components/FullImageCard";
import IconCard from "@/components/IconCard";
import DualTime from "@/components/DualTime";
import Currency from "@/components/Currency";

const Home = () => {
  const { menuData, overview } = tripData;
  const iconMenu = menuData.filter((item) => item.type === "icon");
  const imageMenu = menuData.filter((item) => item.type === "image");

  return (
    <div className={styles.container}>
      <header className={styles.menuHeader}>
        {/* <h1 className={styles.menuTitle}>
          <span>{overview.hello}</span>
        </h1> */}
        <div className={styles.infoContainer}>
          <DualTime overview={overview} />
          <Currency overview={overview} />
        </div>
      </header>
      <div className={styles.iconMenuContainer}>
        {iconMenu.map((item) => (
          <IconCard
            key={item.path}
            title={item.title}
            icon={item.icon}
            path={item.path}
            direction="row"
          />
        ))}
      </div>
      <div className={styles.itineraryContainer}>
        <FullImageCard title="일정표" type="main" />
      </div>
      <div className={styles.imageMenuContainer}>
        {imageMenu.map((item) => (
          <FullImageCard
            key={item.path}
            title={item.title}
            image={item.image}
            path={item.path}
          />
        ))}
      </div>
      {/* sample */}
    </div>
  );
};

export default Home;
