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
    image: "./images/01.jpeg",
    path: "/places",
    type: "image",
  },
  {
    id: 3,
    title: "먹을거",
    icon: Utensils,
    image: "./images/01.jpeg",
    path: "/food",
    type: "image",
  },
];
