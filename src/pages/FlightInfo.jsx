import React, { useState } from "react";
import {
  Plane,
  Utensils,
  Luggage,
  MapPin,
  ExternalLink,
  Clock,
  Building2,
  Info,
} from "lucide-react";
import styles from "./FlightInfo.module.css";

const today = new Date().toISOString().split("T")[0];

const FlightInfo = () => {
  // 1. 데이터 구조 (가는 편 / 오는 편)
  const flightData = {
    departure: {
      id: "dep",
      label: "가는 편 (ICN → SGN)",
      date: "2026-03-25", // 비교를 위해 YYYY-MM-DD 형식
      displayDate: "2026. 03. 25 (수)",
      flightNo: "KE469",
      from: {
        code: "ICN",
        city: "인천",
        time: "18:35",
        terminal: "T2",
        counter: "A-G",
      },
      to: { code: "SGN", city: "호치민", time: "22:10", terminal: "T2" },
      seat: "32K",
      meal: "쇠고기 비빔밥",
      baggage: "23kg / 1개",
    },
    return: {
      id: "ret",
      label: "오는 편 (SGN → ICN)",
      date: "2026-03-30",
      displayDate: "2026. 03. 30 (월)",
      flightNo: "KE470",
      from: {
        code: "SGN",
        city: "호치민",
        time: "23:45",
        terminal: "T2",
        counter: "L",
      },
      to: { code: "ICN", city: "인천", time: "07:10", terminal: "T2" },
      seat: "30A",
      meal: "오므라이스",
      baggage: "23kg / 1개",
    },
  };

  const [activeTab, setActiveTab] = useState(
    today > flightData.departure.date ? "ret" : "dep",
  );

  const current =
    activeTab === "dep" ? flightData.departure : flightData.return;

  return (
    <div className={styles.container}>
      {/* 탭 메뉴 */}
      <div className={styles.tabWrapper}>
        <button
          className={`${styles.tab} ${activeTab === "dep" ? styles.active : ""}`}
          onClick={() => setActiveTab("dep")}
        >
          Departure
        </button>
        <button
          className={`${styles.tab} ${activeTab === "ret" ? styles.active : ""}`}
          onClick={() => setActiveTab("ret")}
        >
          Return
        </button>
      </div>

      {/* 티켓 메인 카드 */}
      <div className={styles.ticketCard}>
        <div className={styles.ticketHeader}>
          <div className={styles.airline}>
            <div className={styles.koreanAirCircle} />
            <span className={styles.airlineName}>KOREAN AIR</span>
          </div>
          <span className={styles.flightNo}>{current.flightNo}</span>
        </div>

        <div className={styles.journey}>
          <div className={styles.locBox}>
            <span className={styles.city}>{current.from.city}</span>
            <span className={styles.code}>{current.from.code}</span>
            <span className={styles.time}>{current.from.time}</span>
          </div>
          <div className={styles.planeIconArea}>
            <Plane size={24} className={styles.movingPlane} />
            <div className={styles.line} />
          </div>
          <div className={styles.locBox}>
            <span className={styles.city}>{current.to.city}</span>
            <span className={styles.code}>{current.to.code}</span>
            <span className={styles.time}>{current.to.time}</span>
          </div>
        </div>

        <div className={styles.ticketFooter}>
          <div className={styles.footerInfo}>
            <span>DATE</span>
            <strong>{current.displayDate}</strong>
          </div>
          <div className={styles.footerInfo}>
            <span>SEAT</span>
            <strong>{current.seat}</strong>
          </div>
        </div>
      </div>

      {/* 공항 상세 정보 (탭 변경 시 함께 변경) */}
      <div className={styles.detailSection}>
        <div className={styles.infoRow}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <Building2 size={16} /> 공항 정보
            </div>
            <p>
              <strong>터미널:</strong> {current.from.terminal}
            </p>
            <p>
              <strong>카운터:</strong> {current.from.counter}
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <Luggage size={16} /> 수하물
            </div>
            <p>{current.baggage}</p>
          </div>
        </div>

        <div className={styles.infoCardFull}>
          <div className={styles.cardHeader}>
            <Utensils size={16} /> 기내식 메뉴
          </div>
          <p>
            오늘의 추천: <strong>{current.meal}</strong>
          </p>
          <span className={styles.hint}>
            * 음료(와인, 맥주, 주스 등) 무료 제공
          </span>
        </div>

        <button className={styles.checkinBtn}>
          <ExternalLink size={16} /> 모바일 체크인 바로가기
        </button>
      </div>
    </div>
  );
};

export default FlightInfo;
