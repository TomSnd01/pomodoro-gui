import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { COLORS } from "@/values/colors";
import { CyclePhase } from "@/util/enums/cyclePhase";
import { CyclePhaseText } from "@/util/enums/cyclePhaseText";

type CustomIconProps = {
  CyclePhase: CyclePhase;
  percentage: number;
  timer: string;
  cycleCount: string;
};

export default function ProgressBar({
  CyclePhase,
  percentage,
  timer,
  cycleCount,
}: CustomIconProps) {
  const color = COLORS[CyclePhase];

  return (
    <CircularProgressbarWithChildren
      value={percentage}
      strokeWidth={5}
      styles={{
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          width: 200,
          marginTop: 5,
        },
        path: {
          stroke: color,
        },
        trail: {
          stroke: COLORS.othermainhighlight,
        },
      }}
      counterClockwise
    >
      <div style={{ fontSize: 20 }}>{CyclePhaseText[CyclePhase]}</div>
      <div style={{ fontSize: 40 }}>{timer}</div>
      <div style={{ fontSize: 20 }}>{cycleCount}</div>
    </CircularProgressbarWithChildren>
  );
}
