import { PauseIcon } from "@/components/icons/home/PauseIcon";
import { PlayIcon } from "@/components/icons/home/PlayIcon";
import styles from "../page.module.css";

type CustomProps = {
  playing: boolean;
};

export default function ButtonPlayPause({ playing }: CustomProps) {
  return (
    <button
      style={{ marginRight: 5, marginLeft: 5 }}
      className={styles.svgIcon}
    >
      {playing ? <PauseIcon size={34} /> : <PlayIcon size={34} />}
    </button>
  );
}
