import styles from "./Upload.module.css";
import loading from "@/assets/icons/loading.svg";
import { CloseIcon } from "../CloseIcon";

type UploadButton = {
  text?: string;
  children: React.ReactNode;
  state: "default" | "loading" | "error" | "success" | "uploaded";
  onClick?: () => void;
  onCancel: () => void;
};
const UploadButton = ({
  children,
  state,
  text,
  onClick,
  onCancel,
}: UploadButton) => {
  return (
    <div className={styles.upload_button_container}>
      <div className={styles.upload_button_container_content}>
        {state == "default" ? (
          <button
            className={`${styles.upload_button} ${styles[state]}`}
            onClick={onClick}
          >
            {children}
          </button>
        ) : (
          <div className={`${styles.upload} ${styles[state]}`}>
            {state == "loading" ? (
              <div className={styles.loading}>
                <img
                  src={loading}
                  alt="loading"
                  className={styles.loading_icon}
                />
              </div>
            ) : (
              children
            )}
          </div>
        )}
        {state != "default" && state != "loading" && (
          <CloseIcon onClick={onCancel} />
        )}
      </div>
      {text && <p className={`${styles[state]} ${styles.text}`}>{text}</p>}
    </div>
  );
};

export default UploadButton;
