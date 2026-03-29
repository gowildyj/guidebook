export const bookingData = [
  {
    id: "b01",
    category: "입국 서비스",
    title: "호치민 공항 패스트트랙",
    provider: "베트남 피크타임",
    date: "2026년 04월 11일(토)",
    time: "항공기 도착 직후",
    location: "비행기에서 내려서 입국심사대(Immigration) 근처",
    duration: "약 10~20분 (대기 없이 통과)",
    contact: "+84 90 123 4567 (비상시 카톡 확인)",
    images: ["https://images.unsplash.com/photo-1569154941061-e231b4725ef1"],
    requirements: [
      "여권 지참",
      "이름 적힌 피켓 든 직원 찾기",
      "비자 필요시 서류 미리 준비",
    ],
    description:
      "입국 심사 줄을 서지 않고 전용 라인으로 빠르게 통과하는 서비스입니다. 부모님 피로도를 최소화하기 위해 필수!",
    itinerary: [
      { time: "도착", activity: "비행기 하차 후 입국 심사 구역 이동" },
      { time: "미팅", activity: "본인 이름 피켓을 든 직원과 조인" },
      { time: "통과", activity: "전용 카운터에서 빠른 입국 심사" },
      { time: "수하물", activity: "짐 찾고 가이드 미팅 포인트로 이동" },
    ],
    status: "예약 확정",
    voucherUrl:
      "https://smartstore.naver.com/vietnamtravel/products/9290888013",
  },
  {
    id: "b02",
    category: "단독투어",
    title: "메콩강 미토 전일 투어",
    provider: "베트남 피크타임",
    date: "2026년 04월 12일(일)",
    time: "08:30 미팅",
    meetingPoint: "호텔 로비 (가이드가 모시러 옴)",
    location: "미토(My Tho) & 벤째(Ben Tre)",
    duration: "약 8시간 (08:30 - 16:30)",
    contact: "카카오톡 ID: vietnamgajago",
    images: ["https://images.unsplash.com/photo-1528127269322-539801943592"],
    requirements: [
      "편한 신발 (샌들 추천)",
      "모자 및 선글라스",
      "썬크림",
      "개인 용돈 (음료 등)",
      "가이드/기사님 매너팁",
    ],
    description:
      "한국어 가이드가 동행하는 우리 가족만의 단독 투어입니다. 나룻배 체험과 현지식 점심이 포함되어 있어요.",
    itinerary: [
      { time: "08:30", activity: "호텔 로비 가이드 미팅 및 미토 이동" },
      { time: "10:30", activity: "미토 도착 및 대형 보트 탑승" },
      { time: "11:30", activity: "유니온 아일랜드 관광 (꿀차, 열대과일 시식)" },
      { time: "12:30", activity: "나룻배(노젓는 배) 체험 및 현지식 점심" },
      { time: "14:30", activity: "벤째 섬 방문 및 코코넛 사탕 제작 견학" },
      { time: "16:30", activity: "호텔 복귀 및 투어 종료" },
    ],
    status: "예약 확정",
    voucherUrl:
      "https://smartstore.naver.com/vietnamtravel/products/10078668527",
  },
];
