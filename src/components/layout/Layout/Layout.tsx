import Header from "../Header/Header";
import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
