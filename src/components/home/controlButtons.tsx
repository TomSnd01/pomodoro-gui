import { PlayIcon } from "@/components/icons/home/PlayIcon";
import { PauseIcon } from "@/components/icons/home/PauseIcon";
import { SkipForwardIcon } from "@/components/icons/home/SkipForwardIcon";
import { SkipBackwardIcon } from "@/components/icons/home/SkipBackwardIcon";
import ButtonPlayPause from "@/components/home/controlButtons/buttonPlayPause";
import ButtonSkipForward from "@/components/home/controlButtons/buttonSkipForward";
import ButtonSkipBackward from "@/components/home/controlButtons/buttonSkipBackward";

type CustomProps = {
  playing: boolean;
};

export default function ControlButtons({ playing }: CustomProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ButtonSkipBackward />
      <ButtonPlayPause playing={playing} />
      <ButtonSkipForward />
    </div>
  );
}
