import { PauseIcon } from "@/components/icons/home/PauseIcon";
import { PlayIcon } from "@/components/icons/home/PlayIcon";
import styles from "../page.module.css";
import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";

type CustomProps = {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonPlayPause({ playing, setPlaying }: CustomProps) {
  function handleClick() {
    setPlaying(!playing);
    invoke("short_break_notification", { name: "Next.js" }).catch(
      console.error
    );
  }

  return (
    <button
      style={{ marginRight: 5, marginLeft: 5 }}
      className={styles.svgIcon}
      onClick={handleClick}
    >
      {playing ? <PauseIcon size={36} /> : <PlayIcon size={36} />}
    </button>
  );
}
