import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import { PAGES } from "@/shared/contants/pages";
import upload from "@/assets/icons/upload.svg";
import generate from "@/assets/icons/generate.svg";
import history from "@/assets/icons/history.svg";
import styles from "./header.module.css";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" className={styles.header__logo_image} />
        <span className={styles.header__logo_text}>
          Межгалактическая аналитика
        </span>
      </div>
      <div className={styles.header__links}>
        <Link
          to={PAGES.MAIN}
          className={`${styles.header__link} ${
            pathname == PAGES.MAIN ? styles.active : ""
          }`}
        >
          <img src={upload} alt="home" className={styles.header__link_icon} />
          Главная
        </Link>
        <Link
          to={PAGES.CSV}
          className={`${styles.header__link} ${
            pathname == PAGES.CSV ? styles.active : ""
          }`}
        >
          <img
            src={generate}
            alt="generate"
            className={styles.header__link_icon}
          />
          Генерация
        </Link>
        <Link
          to={PAGES.HISTORY}
          className={`${styles.header__link} ${
            pathname == PAGES.HISTORY ? styles.active : ""
          }`}
        >
          <img
            src={history}
            alt="history"
            className={styles.header__link_icon}
          />
          История
        </Link>
      </div>
    </div>
  );
};

export default Header;
