import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Home,
  ClipboardCheck,
  Map,
  Utensils,
  Calendar,
} from "lucide-react";
import styles from "./MainLayout.module.css";

import { tripData } from "@/data";
import Navigation from "@/components/Layout/Navigation";

const MainLayout = () => {
  const { menuData, overview } = tripData;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isHome = pathname === "/";
  const currentMenu = menuData.find((item) => item.path === pathname);

  const titleStr = (
    <>
      {overview.hello}&nbsp;&nbsp;
      <span className={styles.highlight}>{overview.hello2}</span>&nbsp;&nbsp;
      {overview.helloKor}
    </>
  );
  const pageTitles = isHome ? titleStr : currentMenu?.title || "";

  return (
    <div className={styles.appWrapper}>
      <header className={styles.topBar}>
        {!isHome && (
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            <ChevronLeft size={24} />
            <span></span>
          </button>
        )}
        <h2 className={styles.pageTitle}>{pageTitles}</h2>
        {/* <div className={styles.emptySpace} /> */}
      </header>

      <main className={styles.content} key={pathname}>
        <Outlet />
      </main>

      <Navigation />
    </div>
  );
};

export default MainLayout;
