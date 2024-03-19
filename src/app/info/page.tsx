"use client";

import styles from "./page.module.css";
import { COLORS } from "@/values/colors";

export default function Info() {
  return (
    <main className={styles.home}>
      <h1>Tauri Pomodoro GUI</h1>
      <h1>Version 0.1.0</h1>
      <h1 className={styles.header}>
        Built by{" "}
        <a
          style={{ color: COLORS.otherhighlight }}
          href={"https://github.com/TomSnd01"}
        >
          TomSnd01
        </a>
      </h1>
    </main>
  );
}
