import { NavLink } from "react-router-dom";
import {
  Home,
  SquareCheckBig,
  Map,
  Utensils,
  Calendar,
  ChevronLeft,
} from "lucide-react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const menus = [
    { path: "/", label: "홈", icon: Home },
    { path: "/places", label: "관광지", icon: Map },
    { path: "/food", label: "먹을거", icon: Utensils },
    { path: "/checklist", label: "준비물", icon: SquareCheckBig },
  ];

  return (
    <nav className={styles._nav}>
      {menus.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? styles._active : styles._link
          }
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
