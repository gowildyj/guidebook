import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IconCard.module.css";

const IconCard = ({ title, icon: Icon, path, direction = "column" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) navigate(path);
  };

  return (
    <div
      className={`${styles.card} ${styles[direction]}`}
      onClick={handleClick}
    >
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
