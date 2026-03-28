import React, { useState } from "react";
import {
  Plane,
  Utensils,
  Luggage,
  ExternalLink,
  Building2,
  Clock,
  Camera,
  Info,
} from "lucide-react";
import styles from "./FlightInfo.module.css";
import { tripData } from "@/data";

const today = new Date().toISOString().split("T")[0];

const FlightInfo = () => {
  const flightData = tripData.flightData;

  // 상단탭. 날짜에 따라서 다음 비행편 탭 활성화
  const autoIndex = flightData.findIndex((f) => f.date >= today);
  const initialTab = autoIndex === -1 ? 0 : autoIndex;

  const [activeIdx, setActiveIdx] = useState(initialTab);
  const current = flightData[activeIdx];

  return (
    <div className={styles.container}>
      <div className={styles.tabWrapper}>
        {flightData.map((flight, idx) => (
          <button
            key={flight.id || idx}
            className={`${styles.tab} ${activeIdx === idx ? styles.active : ""}`}
            onClick={() => setActiveIdx(idx)}
          >
            {flight.tabLabel || `구간 ${idx + 1}`}
          </button>
        ))}
      </div>

      {/* 티켓 카드 */}
      <div className={styles.ticketCard}>
        <div className={styles.ticketHeader}>
          <div className={styles.airline}>
            <div className={styles.airlineCircle} />
            <span className={styles.airlineName}>
              {current.airline}
              {current.airlineEn && ` (${current.airlineEn})`}
            </span>
          </div>
          <div className={styles.flightMeta}>
            <span className={styles.flightNo}>{current.flightNo}</span>
          </div>
        </div>

        <div className={styles.journey}>
          <div className={styles.locBox}>
            <span className={styles.city}>{current.from.city}</span>
            <span className={styles.code}>{current.from.code}</span>
            <span className={styles.time}>{current.from.time}</span>
          </div>
          <div className={styles.planeIconArea}>
            <span className={styles.duration}>{current.duration}</span>
            <Plane size={22} className={styles.movingPlane} />
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
            <span>날짜</span>
            <strong>{current.displayDate}</strong>
          </div>
          <div className={styles.footerInfo}>
            <span>좌석</span>
            <span className={styles.seatWrapper}>
              <strong className={styles.seat}>
                {Array.isArray(current.seat) ? (
                  current.seat.map((s, i) => <strong key={i}>{s}</strong>)
                ) : (
                  <strong>{current.seat}</strong>
                )}
              </strong>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.detailSection}>
        <div className={styles.infoRow}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <Building2 size={16} /> 공항 정보
            </div>
            <p className={styles.mainInfo}>
              <strong>출발: {current.from.terminal}</strong>
            </p>
            <p className={styles.subInfo}>
              <strong>도착: {current.to.terminal}</strong>
            </p>
            {/* <p className={styles.subInfo}>{current.from.counter}</p> */}
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <Luggage size={16} /> 수하물
            </div>
            <p className={styles.mainInfo}>
              <strong>위탁: {current.baggageCheck}</strong>
            </p>
            <p className={styles.subInfo}>기내: {current.baggageCabin}</p>
          </div>
        </div>

        <div className={styles.infoCardFull}>
          <div className={styles.cardHeader}>
            <Utensils size={18} /> 기내식 선택 (Meal Selection)
          </div>

          <div className={styles.mealSelectionWrapper}>
            {current.meals.map((mealStep, stepIdx) => (
              <div key={stepIdx} className={styles.mealStepWrapper}>
                {/* <h4 className={styles.mealStepTitle}>{mealStep.title}</h4> */}

                <div className={styles.mealSelectionWrapper}>
                  {mealStep.options.map((m, index) => (
                    <React.Fragment key={index}>
                      <div className={styles.mealOption}>
                        {m.image ? (
                          <div className={styles.mealImageWrapper}>
                            <img
                              src={m.image}
                              alt={m.name}
                              className={styles.mealImage}
                            />
                          </div>
                        ) : (
                          <div className={styles.mealImageSmall}>
                            <Camera size={20} />
                            <span className={styles.imageLabel}>
                              Menu {index + 1}
                            </span>
                          </div>
                        )}
                        <div className={styles.mealInfoText}>
                          <p className={styles.mealTitle}>
                            <strong>{m.name}</strong>
                          </p>
                        </div>
                      </div>
                      {index < mealStep.options.length - 1 && (
                        <div className={styles.mealDivider}>선택</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}

            <div className={styles.drinkTip}>
              {Array.isArray(current.mealDetail) ? (
                current.mealDetail.map((m, i) => <strong key={i}>{m}</strong>)
              ) : (
                <strong>{current.mealDetail}</strong>
              )}
            </div>
          </div>
        </div>

        {/* <button className={styles.checkinBtn}>
          <ExternalLink size={16} /> 모바일 체크인 바로가기
        </button> */}
      </div>
    </div>
  );
};

export default FlightInfo;
