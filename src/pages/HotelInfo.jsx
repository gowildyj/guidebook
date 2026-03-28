import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  MapPin,
  Copy,
  WashingMachine,
  Bed,
  Clock,
  Navigation as NavIcon,
} from "lucide-react";
import styles from "./HotelInfo.module.css";
import Toast from "@/components/Toast";
import { tripData } from "@/data";

const HotelInfo = () => {
  const hotelData = tripData.hotelData;
  const [showToast, setShowToast] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const current = hotelData[activeIdx];

  // 구글 지도 연결
  const openGoogleMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      current.nameVie + " " + current.address,
    )}`;
    window.open(url, "_blank");
  };

  // 주소 복사
  const copyAddress = () => {
    navigator.clipboard.writeText(current.address);
    setShowToast(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabWrapper}>
        {hotelData.map((hotel, idx) => (
          <button
            key={hotel.id || idx}
            className={`${styles.tab} ${activeIdx === idx ? styles.active : ""}`}
            onClick={() => setActiveIdx(idx)}
          >
            {hotel.tabLabel}
          </button>
        ))}
      </div>

      <div className={styles.hotelCard}>
        <div className={styles.imageViewer}>
          <Swiper
            key={current.id}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ type: "fraction" }}
            loop={true}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            className={styles.mySwiper}
          >
            {current.images.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgUrl}
                  alt={`${current.nameKor} 사진`}
                  className={styles.hotelImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.typeBadge}>{current.type}</div>
        </div>

        <div className={styles.infoArea}>
          <div className={styles.titleSection}>
            <h2 className={styles.nameKor}>{current.nameKor}</h2>
            <p className={styles.nameVie}>{current.nameVie}</p>
          </div>

          <div className={styles.addressBox} onClick={copyAddress}>
            <MapPin size={20} className={styles.accentIcon} />
            <span className={styles.addressText}>{current.address}</span>
            <Copy size={20} className={styles.copyIcon} />
          </div>

          <div className={styles.gridInfo}>
            <div className={styles.gridItem}>
              <Clock size={20} className={styles.accentIcon} />
              <div className={styles.gridText}>
                <div className={styles.dateTimeRow}>
                  <span>체크인</span>
                  <strong>
                    {current.checkInDate} — {current.checkIn}
                  </strong>
                </div>
                <div className={styles.dateTimeRow}>
                  <span>체크아웃</span>
                  <strong>
                    {current.checkOutDate} — {current.checkOut}
                  </strong>
                </div>
              </div>
            </div>

            <div className={styles.gridItem}>
              <Clock size={20} className={styles.accentIcon} />
              <div className={styles.gridText}>
                <strong className={styles.roomInfo}>{current.info}</strong>
                <p className={styles.roomSubInfo}>
                  {current.info2 || current.bed}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.serviceSection}>
          <div className={styles.specialCard}>
            <div className={styles.specialText}>
              <strong>숙소 이용 꿀팁</strong>
              <p>{current.special}</p>
            </div>
          </div>

          <div className={styles.facilityList}>
            {current.facilities.map((f, i) => (
              <span key={i} className={styles.tag}>
                # {f}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.mapBtn} onClick={openGoogleMap}>
            <NavIcon size={20} />
            구글 지도로 위치 보기
          </button>
        </div>
      </div>

      {/* <p className={styles.notice}>* 체크인 시 여권을 제시해 주세요.</p> */}

      {showToast && (
        <Toast
          message="주소가 복사되었습니다! 그랩에 붙여넣으세요."
          setToast={setShowToast}
        />
      )}
    </div>
  );
};

export default HotelInfo;
