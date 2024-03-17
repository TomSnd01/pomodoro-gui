import styles from "@/components/titlebar/page.module.css";
import { MinimizeIcon } from "@/components/icons/titlebar/MinimizeIcon";
import { useEffect } from "react";
import { COLORS } from "@/values/colors";

export default function ButtonMinimize() {
  useEffect(() => {
    const appWindow = require("@tauri-apps/api/window").appWindow;

    const button = document.getElementById("button-minimize")!;
    button.addEventListener("click", () => appWindow.minimize());

    return () => {
      button.removeEventListener("click", () => appWindow.minimize());
    };
  }, []);

  return (
    <button className={styles.titlebarbuttonright} id="button-minimize">
      <MinimizeIcon size={28} color={COLORS.mainhighlight} />
    </button>
  );
}
