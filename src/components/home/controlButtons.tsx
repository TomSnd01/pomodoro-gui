import { PlayIcon } from "@/components/icons/home/PlayIcon";
import { PauseIcon } from "@/components/icons/home/PauseIcon";
import { SkipForwardIcon } from "@/components/icons/home/SkipForwardIcon";
import { SkipBackwardIcon } from "@/components/icons/home/SkipBackwardIcon";
import ButtonPlayPause from "@/components/home/controlButtons/buttonPlayPause";
import ButtonSkipForward from "@/components/home/controlButtons/buttonSkipForward";
import ButtonSkipBackward from "@/components/home/controlButtons/buttonSkipBackward";

type CustomProps = {};

export default function ControlButtons() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ButtonSkipBackward />
      <ButtonPlayPause />
      <ButtonSkipForward />
    </div>
  );
}
