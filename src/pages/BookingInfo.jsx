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
  Scroll,
  Signpost,
  Ticket,
  X,
  ChevronRight,
  Clock,
  ExternalLink,
} from "lucide-react";
import styles from "./BookingInfo.module.css";
import { tripData } from "@/data";

const BookingInfo = () => {
  const { bookingData } = tripData;
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState(null);

  if (!bookingData || bookingData.length === 0) return null;
  const current = bookingData[activeIdx];

  const makeCall = (number) => {
    if (!number) return;
    window.location.href = `tel:${number.replace(/[^0-9+]/g, "")}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookingSelector}>
        <span className={styles.selectorLabel}>
          나의 예약 리스트 ({bookingData.length})
        </span>
        <div className={styles.listWrapper}>
          {bookingData.map((item, idx) => (
            <button
              key={item.id || idx}
              className={`${styles.selectorItem} ${activeIdx === idx ? styles.activeItem : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className={styles.itemContent}>
                <div className={styles.dot} />
                <span className={styles.itemTitleText}>{item.title}</span>
              </div>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </div>

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

      <section className={styles.cardSection}>
        <h2 className={styles.tourTitle}>{current.title}</h2>
        <span className={styles.tourDesc}>{current.description}</span>
        <div className={styles.gridInfo}>
          <div className={styles.infoBox}>
            <Calendar size={18} className={styles.infoIcon} />
            <div className={styles.infoText}>
              <span>날짜 및 시간</span>
              <strong>
                {current.date} / {current.time}
              </strong>
            </div>
          </div>
          <div className={styles.infoBox}>
            <MapPin size={18} className={styles.infoIcon} />
            <div className={styles.infoText}>
              <span>장소</span>
              <strong>{current.meetingPoint || current.location}</strong>
            </div>
          </div>
          <div
            className={styles.infoBox}
            onClick={() => makeCall(current.contact)}
          >
            <Phone size={18} className={styles.infoIcon} />
            <div className={styles.infoText}>
              <span>연락처</span>
              <strong>{current.contact}</strong>
            </div>
          </div>
        </div>
      </section>

      {current.itinerary?.length > 0 && (
        <section className={styles.cardSection}>
          <div className={styles.sectionHeader}>
            <Signpost size={20} className={styles.accentIcon} />
            <span>투어 상세 스케줄</span>
          </div>
          <div className={styles.timeline}>
            {current.itinerary.map((step, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timeSide}>{step.time}</div>
                <div className={styles.lineSide}>
                  <div className={styles.stepDot} />
                  {i !== current.itinerary.length - 1 && (
                    <div className={styles.stepLine} />
                  )}
                </div>
                <div
                  className={styles.contentSide}
                  onClick={() => setSelectedSpot(step)}
                >
                  <div className={styles.stepTitle}>{step.activity}</div>

                  {step.summary && (
                    <p className={styles.stepSummary}>{step.summary}</p>
                  )}

                  {step.spotImg && (
                    <div className={styles.stepImageWrapper}>
                      <img
                        src={step.spotImg}
                        alt={step.activity}
                        className={styles.stepImage}
                      />
                    </div>
                  )}

                  <span className={styles.tapMore}>상세정보 확인</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={styles.cardSection}>
        <div className={styles.sectionHeader}>
          <Scroll size={20} className={styles.accentIcon} />
          <span>필수 준비물</span>
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

      <div className={styles.descriptionArea}>
        <Info size={14} />
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
              <p className={styles.sheetTime}>{selectedSpot.time}</p>
              <h3 className={styles.sheetTitle}>{selectedSpot.activity}</h3>
              {selectedSpot.summary && (
                <p className={styles.stepSummary}>{selectedSpot.summary}</p>
              )}
              {selectedSpot.spotImg && (
                <img
                  src={selectedSpot.spotImg}
                  className={styles.sheetImg}
                  alt="spot"
                />
              )}
              <p className={styles.sheetDesc}>{selectedSpot.detail || ""}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingInfo;
