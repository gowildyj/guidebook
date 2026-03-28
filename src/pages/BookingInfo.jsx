import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Info,
  ListChecks,
  Timer,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import styles from "./BookingInfo.module.css";
import { tripData } from "@/data";

const BookingInfo = () => {
  const bookingData = tripData?.bookingData || [];
  const [activeIdx, setActiveIdx] = useState(0);

  if (bookingData.length === 0) return null;

  const current = bookingData[activeIdx];

  const makeCall = (number) => {
    if (!number) return;
    window.location.href = `tel:${number.replace(/[^0-9+]/g, "")}`;
  };

  return (
    <div className={styles.container}>
      {/* 💡 상단 예약 선택 영역: 한 줄씩 리스트 형태로 */}
      <div className={styles.selectorWrapper}>
        <span className={styles.selectorTitle}>
          나의 예약 목록 ({bookingData.length})
        </span>
        <div className={styles.bookingList}>
          {bookingData.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`${styles.bookingItem} ${activeIdx === idx ? styles.activeItem : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className={styles.bookingTitle}>
                <span className={styles.dot} />
                {item.title}
              </div>
              <ChevronRight size={16} className={styles.arrowIcon} />
            </div>
          ))}
        </div>
      </div>

      {/* 메인 콘텐츠 카드 */}
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.category}>{current.category}</span>
          <h2 className={styles.title}>{current.title}</h2>
          <div className={styles.providerInfo}>
            예약처: <strong>{current.provider}</strong>
          </div>
        </div>

        {/* 💡 핵심 정보: 박스 없는 리스트 구조 */}
        <div className={styles.infoList}>
          <div className={styles.listItem}>
            <div className={styles.iconWrapper}>
              <Calendar size={22} />
            </div>
            <div className={styles.listContent}>
              <span className={styles.label}>예약 날짜 및 시간</span>
              <strong className={styles.mainText}>{current.date}</strong>
              <p className={styles.accentText}>{current.time}</p>
            </div>
          </div>

          <div className={styles.listItem}>
            <div className={styles.iconWrapper}>
              <MapPin size={22} />
            </div>
            <div className={styles.listContent}>
              <span className={styles.label}>미팅 장소</span>
              <strong className={styles.mainText}>
                {current.meetingPoint || current.location}
              </strong>
            </div>
          </div>

          <div className={styles.listItem}>
            <div className={styles.iconWrapper}>
              <Timer size={22} />
            </div>
            <div className={styles.listContent}>
              <span className={styles.label}>소요 시간</span>
              <strong className={styles.mainText}>{current.duration}</strong>
            </div>
          </div>

          <div
            className={styles.listItem}
            onClick={() => makeCall(current.contact)}
          >
            <div className={styles.iconWrapper}>
              <Phone size={22} />
            </div>
            <div className={styles.listContent}>
              <span className={styles.label}>비상 연락처 (클릭 시 연결)</span>
              <strong className={styles.mainText}>{current.contact}</strong>
            </div>
          </div>
        </div>

        {/* 투어 타임라인 */}
        {current.itinerary?.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Clock size={20} /> <span>투어 타임라인</span>
            </div>
            <div className={styles.timelineContainer}>
              {current.itinerary.map((step, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timeBadge}>{step.time}</div>
                  <div className={styles.activityText}>{step.activity}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 필수 준비물 */}
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <ListChecks size={20} /> <span>필수 준비물</span>
          </div>
          <div className={styles.reqGrid}>
            {current.requirements?.map((req, i) => (
              <div key={i} className={styles.reqItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 설명 */}
        <div className={styles.descriptionArea}>
          <Info size={18} />
          <p>{current.description}</p>
        </div>

        {current.voucherUrl && (
          <button
            className={styles.voucherBtn}
            onClick={() => window.open(current.voucherUrl)}
          >
            <ExternalLink size={18} /> 모바일 바우처 보기
          </button>
        )}
      </div>
    </div>
  );
};

export default BookingInfo;
