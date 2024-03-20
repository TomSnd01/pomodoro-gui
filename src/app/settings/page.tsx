"use client";

import styles from "./page.module.css";
import SettingsGrid from "@/components/settings/settingsGrid";

export default function Settings() {
  return (
    <main className={styles.home}>
      <SettingsGrid
        focusDuration={25}
        shortBreakDuration={5}
        longBreakDuration={20}
        cycleCount={4}
      />
    </main>
  );
}
