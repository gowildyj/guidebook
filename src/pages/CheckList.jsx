import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Circle,
  Briefcase,
  Stethoscope,
  CreditCard,
  Camera,
  Luggage,
  RotateCcw,
} from "lucide-react";
import styles from "./CheckList.module.css";
import { tripData } from "@/data";

const CheckList = () => {
  const defaultData = tripData.checkList;
  const STORAGE_KEY = "TRAVEL_CHECKLIST";
  const CHECKLIST_VERSION = "CHECKLIST_VERSION";
  const CURRENT_VERSION = "1.0.0";

  const [list, setList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedVersion = localStorage.getItem(CHECKLIST_VERSION);

      if (saved && savedVersion === CURRENT_VERSION) {
        try {
          return JSON.parse(saved);
        } catch (parseError) {
          console.error("fail", parseError);
        }
      }

      localStorage.setItem("CHECKLIST_VERSION", CURRENT_VERSION);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));

      return defaultData;
    } catch (e) {
      console.error("localstorage loading failed:", e);
      return defaultData;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const getIcon = (category) => {
    if (category.includes("필수")) return <CreditCard size={20} />;
    if (category.includes("의약")) return <Stethoscope size={20} />;
    if (category.includes("전자")) return <Camera size={20} />;
    return <Luggage size={20} />;
  };

  const toggleCheck = (category, id) => {
    setList((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    }));
  };

  const resetList = () => {
    if (window.confirm("체크 초기화")) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(CHECKLIST_VERSION);
      setList(defaultData);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.sparkleBox}>
            <Briefcase size={22} color="#fff" />
          </div>
          <h1 className={styles.pageTitle}>준비물 체크리스트</h1>
          <button onClick={resetList} className={styles.resetBtn}>
            <RotateCcw size={14} /> 초기화
          </button>
        </div>
      </header>

      <main className={styles.content}>
        {Object.entries(list).map(([category, items]) => (
          <section key={category} className={styles.categorySection}>
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>{getIcon(category)}</div>
              <h3>{category}</h3>
              <span className={styles.count}>
                {items.filter((i) => i.checked).length}/{items.length}
              </span>
            </div>

            <div className={styles.itemGrid}>
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.checkItem} ${item.checked ? styles.checked : ""}`}
                  onClick={() => toggleCheck(category, item.id)}
                >
                  <div className={styles.checkIcon}>
                    {item.checked ? (
                      <CheckCircle2 size={24} color="var(--accent)" />
                    ) : (
                      <Circle size={24} />
                    )}
                  </div>
                  <span className={styles.itemText}>{item.text}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CheckList;
