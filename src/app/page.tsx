"use client";

import styles from "./page.module.css";
import ProgressBar from "@/components/home/progressBar/progressBar";
import PlayButton from "@/components/home/controlButtons/playButton";

export default function Home() {
  return (
    <main className={styles.home}>
      <ProgressBar
        working={true}
        percentage={66}
        timer={"22:51"}
        cycleCount={"2/4"}
      />
      <PlayButton playing={true} />
    </main>
  );
}
