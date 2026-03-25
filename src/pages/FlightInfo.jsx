import React from "react";
import { Plane, Calendar, Clock, MapPin, ChevronLeft } from "lucide-react";
import styles from "./FlightInfo.module.css";

const FlightInfo = () => {
  const flightData = {
    airline: "VietJet Air",
    flightNo: "VJ863",
    date: "2026. 03. 25",
    from: { city: "인천", code: "ICN", time: "06:45" },
    to: { city: "호치민", code: "SGN", time: "10:15" },
    gate: "112",
    seat: "14A",
    class: "Economy",
  };

  return (
    <div className={styles.container}>
      {/* 티켓 메인 카드 */}
      <div className={styles.ticketCard}>
        {/* 상단: 항공사 정보 */}
        <div className={styles.ticketHeader}>
          <div className={styles.airlineInfo}>
            <Plane size={18} className={styles.planeIcon} />
            <span className={styles.airlineName}>{flightData.airline}</span>
          </div>
          <span className={styles.flightNo}>{flightData.flightNo}</span>
        </div>

        {/* 중단: 여정 (출발 - 도착) */}
        <div className={styles.journeySection}>
          <div className={styles.location}>
            <span className={styles.city}>{flightData.from.city}</span>
            <span className={styles.code}>{flightData.from.code}</span>
            <span className={styles.time}>{flightData.from.time}</span>
          </div>

          <div className={styles.flightIconArea}>
            <div className={styles.dottedLine} />
            <Plane size={24} className={styles.movingPlane} />
            <div className={styles.dottedLine} />
          </div>

          <div className={styles.location}>
            <span className={styles.city}>{flightData.to.city}</span>
            <span className={styles.code}>{flightData.to.code}</span>
            <span className={styles.time}>{flightData.to.time}</span>
          </div>
        </div>

        {/* 절취선 효과 */}
        <div className={styles.divider}>
          <div className={styles.circleLeft} />
          <div className={styles.dashedLine} />
          <div className={styles.circleRight} />
        </div>

        {/* 하단: 세부 정보 */}
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>DATE</span>
            <span className={styles.value}>{flightData.date}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>GATE</span>
            <span className={styles.value}>{flightData.gate}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>SEAT</span>
            <span className={styles.value}>{flightData.seat}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>CLASS</span>
            <span className={styles.value}>{flightData.class}</span>
          </div>
        </div>

        {/* 바코드 디자인 (가짜) */}
        <div className={styles.barcodeArea}>
          <div className={styles.barcode} />
          <span className={styles.barcodeNum}>ST-20260325-SGN</span>
        </div>
      </div>

      <p className={styles.notice}>
        * 실제 보딩 시에는 항공사 공식 앱이나 종이 티켓을 확인하세요.
      </p>
    </div>
  );
};

export default FlightInfo;
