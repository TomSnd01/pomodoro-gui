import { PauseIcon } from "@/components/icons/home/PauseIcon";
import { PlayIcon } from "@/components/icons/home/PlayIcon";
import styles from "../page.module.css";
import { invoke } from "@tauri-apps/api/tauri";
import { useEffect } from "react";

type CustomProps = {
  playing: boolean;
};

function handleClick() {
  invoke("command_test", { name: "Next.js" }).catch(console.error);
}

export default function ButtonPlayPause({ playing }: CustomProps) {
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
