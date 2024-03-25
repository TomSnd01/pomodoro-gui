"use client";

import styles from "./page.module.css";
import SettingsGrid from "@/components/settings/settingsGrid";

export default function Settings() {
  return (
    <main className={styles.home}>
      <SettingsGrid />
    </main>
  );
}
