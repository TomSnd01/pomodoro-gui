import { PauseIcon } from "@/components/icons/home/PauseIcon";
import { PlayIcon } from "@/components/icons/home/PlayIcon";
import styles from "../page.module.css";
import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";

type CustomProps = {};

export default function ButtonPlayPause() {
  let [playing, setPlaying] = useState(false);

  function handleClick() {
    setPlaying(!playing);
    invoke("play_pause", { name: "Next.js" }).catch(console.error);
  }

  return (
    <button
      style={{ marginRight: 5, marginLeft: 5 }}
      className={styles.svgIcon}
      onClick={handleClick}
    >
      {playing ? <PauseIcon size={34} /> : <PlayIcon size={34} />}
    </button>
  );
}
