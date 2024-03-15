import { PlayIcon } from "@/components/icons/PlayIcon";
import { PauseIcon } from "@/components/icons/PauseIcon";

type CustomIconProps = {
  playing: boolean;
};

export default function PlayButton({ playing }: CustomIconProps) {
  return playing ? <PauseIcon size={34} /> : <PlayIcon size={34} />;
}
