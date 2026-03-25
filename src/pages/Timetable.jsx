import React from "react";
import {
  Bus,
  Bed,
  MapPin,
  Utensils,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info,
  Map as MapIcon,
  StickyNote,
  Star,
  Camera,
  Calendar,
} from "lucide-react";
import styles from "./Timetable.module.css";

const Timetable = () => {
  // 날짜 데이터 (나중에 data.js로 빼면 좋아요!)
  const scheduleData = [
    {
      time: "10:00",
      icon: Bus,
      title: "호치민 출발 (풍짱 버스)",
      detail: "280k VND / 미니버스",
      type: "info",
    },
    {
      time: "12:30",
      icon: Bed,
      title: "붕따오 도착 / 호텔 체크인",
      detail: "선라이즈 호텔 (Sunrise)",
      type: "map",
    },
    {
      time: "14:00",
      icon: MapPin,
      title: "예수상 탐방",
      detail: "계단 많음 / 편한 신발",
      type: "memo",
    },
    {
      time: "18:00",
      icon: Utensils,
      title: "저녁 식사 (반콧 미쓰똠)",
      detail: "현지인 맛집 / 웨이팅 있음",
      type: "star",
    },
    {
      time: "20:00",
      icon: Sparkles,
      title: "자유 시간 / 야경 감상",
      detail: "해변 산책로 추천",
      type: "camera",
    },
  ];

  const getDetailIcon = (type) => {
    switch (type) {
      case "info":
        return <Info size={14} />;
      case "map":
        return <MapIcon size={14} />;
      case "memo":
        return <StickyNote size={14} />;
      case "star":
        return <Star size={14} />;
      case "camera":
        return <Camera size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* 날짜 선택 바 */}
      <div className={styles.dateSelector}>
        <div className={styles.dateInfo}>
          <Calendar size={18} className={styles.calendarIcon} />
          <span>3월 25일 (수) / Day 3</span>
        </div>
        <div className={styles.navigation}>
          <button className={styles.navBtn}>
            <ChevronLeft size={20} />
          </button>
          <span className={styles.locationRange}>호치민 → 붕따오</span>
          <button className={styles.navBtn}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 타임라인 리스트 */}
      <div className={styles.timeline}>
        {scheduleData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timeSection}>
              <span className={styles.timeText}>{item.time}</span>
            </div>

            <div className={styles.indicatorSection}>
              <div className={styles.dot}>
                <item.icon size={16} color="white" />
              </div>
              {index !== scheduleData.length - 1 && (
                <div className={styles.line} />
              )}
            </div>

            <div className={styles.contentSection}>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              <div className={styles.detailBadge}>
                {getDetailIcon(item.type)}
                <span>{item.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
