import { SquareCheckBig, Map, Utensils } from "lucide-react";

export const menuData = [
  {
    id: 1,
    title: "준비물",
    description: "빠진 물건 없이 꼼꼼하게!",
    icon: SquareCheckBig,
    path: "/checklist",
  },
  {
    id: 2,
    title: "관광지",
    description: "호치민 & 붕따오 필수 코스",
    icon: Map,
    path: "/places",
  },
  {
    id: 3,
    title: "먹을거",
    description: "현지인이 추천하는 맛집",
    icon: Utensils,
    path: "/food",
  },
];
