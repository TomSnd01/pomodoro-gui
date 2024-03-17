import styles from "@/components/titlebar/page.module.css";
import { CloseIcon } from "@/components/icons/titlebar/CloseIcon";
import { useEffect } from "react";
import { COLORS } from "@/values/colors";

export default function ButtonClose() {
  useEffect(() => {
    const appWindow = require("@tauri-apps/api/window").appWindow;

    const button = document.getElementById("button-close")!;
    button.addEventListener("click", () => appWindow.close());

    return () => {
      button.removeEventListener("click", () => appWindow.close());
    };
  }, []);

  return (
    <button className={styles.titlebarbuttonright} id="button-close">
      <CloseIcon size={22} color={COLORS.mainhighlight} />
    </button>
  );
}
