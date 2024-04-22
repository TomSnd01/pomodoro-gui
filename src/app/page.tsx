"use client";

import styles from "../components/home/page.module.css";
import ProgressBar from "@/components/home/progressBar";
import ControlButtons from "@/components/home/controlButtons";
import { CyclePhase } from "@/util/enums/cyclePhase";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

interface SettingsData {
  focus_duration: number;
  short_break: number;
  long_break: number;
  cycle_count: number;
}

export default function Home() {
  const [data, setData] = useState<SettingsData>();
  const [timerValue, setTimerValue] = useState<string>("25:00");
  let [playing, setPlaying] = useState(false);

  useEffect(() => {
    invoke<string>("get_config_data")
      .then((jsonString) => {
        const result: SettingsData = JSON.parse(jsonString);
        setData(result);
        setTimerValue(result.focus_duration.toString() + ":00");
      })
      .catch(console.error);
  }, []);

  function playPauseFunction() {
    setTimerValue("10:00");
  }

  return (
    <main className={styles.home}>
      <ProgressBar
        CyclePhase={CyclePhase.short_break}
        percentage={66}
        timer={timerValue}
        cycleCount={"2/4"}
      />
      <ControlButtons playing={playing} setPlaying={setPlaying} />
    </main>
  );
}
