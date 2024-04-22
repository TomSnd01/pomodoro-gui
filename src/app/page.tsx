"use client";

import styles from "../components/home/page.module.css";
import ProgressBar from "@/components/home/progressBar";
import ControlButtons from "@/components/home/controlButtons";
import { CyclePhase } from "@/util/enums/cyclePhase";

export default function Home() {
  return (
    <main className={styles.home}>
      <ProgressBar
        CyclePhase={CyclePhase.short_break}
        percentage={66}
        timer={"22:51"}
        cycleCount={"2/4"}
      />
      <ControlButtons />
    </main>
  );
}
