import ButtonPlayPause from "@/components/home/controlButtons/buttonPlayPause";
import ButtonSkipForward from "@/components/home/controlButtons/buttonSkipForward";
import ButtonSkipBackward from "@/components/home/controlButtons/buttonSkipBackward";
import styles from "./page.module.css";

type CustomProps = {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ControlButtons({ playing, setPlaying }: CustomProps) {
  return (
    <div className={styles.controlButtons}>
      <ButtonSkipBackward />
      <ButtonPlayPause playing={playing} setPlaying={setPlaying} />
      <ButtonSkipForward />
    </div>
  );
}
