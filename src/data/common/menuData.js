import {
  SquareCheckBig,
  Map,
  Utensils,
  Plane,
  BedDouble,
  TicketCheck,
} from "lucide-react";

export const menuData = [
  {
    id: 1,
    title: "짐싸기",
    icon: SquareCheckBig,
    path: "/checklist",
    type: "icon",
  },
  {
    id: 2,
    title: "항공권",
    icon: Plane,
    path: "/checklist",
    type: "icon",
  },
  {
    id: 2,
    title: "호텔정보",
    icon: BedDouble,
    path: "/checklist",
    type: "icon",
  },
  {
    id: 2,
    title: "예약정보",
    icon: TicketCheck,
    path: "/checklist",
    type: "icon",
  },
  {
    id: 2,
    title: "관광지",
    icon: Map,
    image: "./images/01.png",
    path: "/places",
    type: "image",
  },
  {
    id: 3,
    title: "먹을거",
    icon: Utensils,
    image: "./images/02.avif",
    path: "/food",
    type: "image",
  },
  {
    id: 2,
    title: "일정표",
    icon: TicketCheck,
    path: "/checklist",
    type: "icon_vertical",
  },
  {
    id: 2,
    title: "번역기",
    icon: TicketCheck,
    path: "/checklist",
    type: "icon_vertical",
  },
];
