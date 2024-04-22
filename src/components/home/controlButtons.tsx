import ButtonPlayPause from "@/components/home/controlButtons/buttonPlayPause";
import ButtonSkipForward from "@/components/home/controlButtons/buttonSkipForward";
import ButtonSkipBackward from "@/components/home/controlButtons/buttonSkipBackward";
import styles from "./page.module.css";

type CustomProps = {};

export default function ControlButtons() {
  return (
    <div className={styles.controlButtons}>
      <ButtonSkipBackward />
      <ButtonPlayPause />
      <ButtonSkipForward />
    </div>
  );
}
