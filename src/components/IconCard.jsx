import React from "react";
import styles from "./IconCard.module.css";

const IconCard = ({ title, icon: Icon, direction = "column" }) => {
  const cardClassName = `${styles.card} ${styles[direction]}`;

  return (
    <div className={cardClassName}>
      <div className={styles.iconWrapper}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <div className={styles.cardContent}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default IconCard;
