"use client";

import styles from "../components/home/page.module.css";
import ProgressBar from "@/components/home/progressBar";
import ControlButtons from "@/components/home/controlButtons";
import VolumeSlider from "@/components/home/volumeSlider";

export default function Home() {
  return (
    <main className={styles.home}>
      <ProgressBar
        working={true}
        percentage={66}
        timer={"22:51"}
        cycleCount={"2/4"}
      />
      <ControlButtons playing={false} />
      <VolumeSlider />
    </main>
  );
}
