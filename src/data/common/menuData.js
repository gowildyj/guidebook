import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaMapMarkedAlt, FaUtensils } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";

import { FaRegSquareCheck } from "react-icons/fa6";
import { GiGreekTemple } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

export const menuData = [
  {
    id: 1,
    title: "준비물",
    description: "빠진 물건 없이 꼼꼼하게!",
    icon: FaRegSquareCheck,
    path: "/checklist",
  },
  {
    id: 2,
    title: "관광지",
    description: "호치민 & 붕따오 필수 코스",
    icon: GiGreekTemple,
    path: "/places",
  },
  {
    id: 3,
    title: "먹을거",
    description: "현지인이 추천하는 맛집",
    icon: ImSpoonKnife,
    path: "/food",
  },
];
