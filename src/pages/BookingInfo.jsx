import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Calendar,
  MapPin,
  Phone,
  CheckCircle2,
  Info,
  ListChecks,
  Sparkles,
  Ticket,
  X,
  ChevronRight,
  Clock,
} from "lucide-react";
import styles from "./BookingInfo.module.css";
import { tripData } from "@/data";

const BookingInfo = () => {
  const { bookingData } = tripData;
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState(null);

  if (!bookingData || bookingData.length === 0) return null;
  const current = bookingData[activeIdx];

  return (
    <div className={styles.container}>
      {/* 1. 투어 선택 리스트 (상단 고정 스타일) */}
      <div className={styles.bookingSelector}>
        {bookingData.map((item, idx) => (
          <button
            key={item.id || idx}
            className={`${styles.selectorItem} ${activeIdx === idx ? styles.activeSelector : ""}`}
            onClick={() => setActiveIdx(idx)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* 2. 메인 이미지 슬라이더 (호텔 스타일) */}
      <div className={styles.mainVisual}>
        <Swiper
          key={current.id}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ type: "fraction" }}
          className={styles.mySwiper}
        >
          {current.images?.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imgUrl} alt="tour" className={styles.mainImg} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.badge}>{current.category}</div>
      </div>

      {/* 3. 예약 핵심 정보 영역 (날짜 및 시간) */}
      <section className={styles.infoSection}>
        <h2 className={styles.tourTitle}>{current.title}</h2>
        <div className={styles.gridInfo}>
          <div className={styles.infoBox}>
            <Calendar size={18} />
            <div>
              <span>날짜 및 시간</span>
              <strong>
                {current.date} / {current.time}
              </strong>
            </div>
          </div>
          <div className={styles.infoBox}>
            <MapPin size={18} />
            <div>
              <span>미팅 장소</span>
              <strong>{current.meetingPoint}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 투어 상세 스케줄 (타임라인 + 사진 + 상세설명) */}
      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <Sparkles size={20} className={styles.accentIcon} />
          <h3>투어 상세 스케줄</h3>
        </div>
        <div className={styles.timeline}>
          {current.itinerary?.map((step, i) => (
            <div
              key={i}
              className={styles.timelineItem}
              onClick={() => setSelectedSpot(step)}
            >
              <div className={styles.timeSide}>{step.time}</div>
              <div className={styles.lineSide}>
                <div className={styles.dot} />
                {i !== current.itinerary.length - 1 && (
                  <div className={styles.line} />
                )}
              </div>
              <div className={styles.contentSide}>
                <div className={styles.stepTitle}>{step.activity}</div>
                {/* 간단 상세 설명 추가 */}
                {step.summary && (
                  <p className={styles.stepSummary}>{step.summary}</p>
                )}
                {/* 사진 옵션 (있을 때만 렌더링) */}
                {step.spotImg && (
                  <div className={styles.imageContainer}>
                    <img
                      src={step.spotImg}
                      alt={step.activity}
                      className={styles.stepImg}
                    />
                  </div>
                )}
                <span className={styles.moreLabel}>자세히 보기</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 필수 준비물 영역 */}
      <section className={styles.contentSection}>
        <div className={styles.sectionHeader}>
          <ListChecks size={20} className={styles.accentIcon} />
          <h3>필수 준비물</h3>
        </div>
        <div className={styles.checkGrid}>
          {current.requirements?.map((req, i) => (
            <div key={i} className={styles.checkItem}>
              <CheckCircle2 size={18} className={styles.checkIcon} />
              <span>{req}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. 바텀 시트 모달 */}
      {selectedSpot && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedSpot(null)}
        >
          <div
            className={styles.bottomSheet}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.sheetHandle} />
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedSpot(null)}
            >
              <X size={20} />
            </button>
            <div className={styles.sheetContent}>
              <h3 className={styles.sheetTitle}>{selectedSpot.activity}</h3>
              <p className={styles.sheetTime}>{selectedSpot.time} 일정</p>
              {selectedSpot.spotImg && (
                <img
                  src={selectedSpot.spotImg}
                  className={styles.sheetImg}
                  alt="spot"
                />
              )}
              <p className={styles.sheetDesc}>
                {selectedSpot.detail ||
                  "현지 가이드가 상세히 안내해 드릴 예정입니다. 😊"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingInfo;
