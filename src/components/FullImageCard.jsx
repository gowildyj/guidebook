import React from "react";
import styles from "./FullImageCard.module.css";

const FullImageCard = ({ title, image, type = "sub" }) => {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.cardContent}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default FullImageCard;
