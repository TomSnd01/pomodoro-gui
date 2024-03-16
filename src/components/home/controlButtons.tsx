import { PlayIcon } from "@/components/icons/PlayIcon";
import { PauseIcon } from "@/components/icons/PauseIcon";
import { SkipForwardIcon } from "@/components/icons/SkipForwardIcon";
import { SkipBackwardIcon } from "@/components/icons/SkipBackwardIcon";

type CustomIconProps = {
  playing: boolean;
};

export default function ControlButtons({ playing }: CustomIconProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <SkipBackwardIcon size={24} />
      <div style={{ marginRight: 5, marginLeft: 5 }}>
        {playing ? <PauseIcon size={34} /> : <PlayIcon size={34} />}
      </div>
      <SkipForwardIcon size={24} />
    </div>
  );
}
