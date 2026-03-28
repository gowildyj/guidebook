import React, { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, setToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setToast]);

  return (
    <div className={styles.toastWrapper}>
      <div className={styles.toastInner}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
