import React from "react";
import styles from "./ImageCard.module.css";

const ImageCard = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={styles.cardContent}>
        <span className={styles.title}>{title}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
