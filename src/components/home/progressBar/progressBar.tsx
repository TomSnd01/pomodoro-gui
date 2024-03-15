import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { COLORS } from "@/values/colors";

type CustomIconProps = {
  working: boolean;
  percentage: number;
  timer: string;
  cycleCount: string;
};

export default function ProgressBar({
  working,
  percentage,
  timer,
  cycleCount,
}: CustomIconProps) {
  const color = working ? COLORS.work : COLORS.break;

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
          margin: 20,
        },
        path: {
          stroke: color,
        },
        trail: {
          stroke: "#919191",
        },
      }}
      counterClockwise
    >
      <div style={{ fontSize: 20 }}>{working ? "Focus" : "Break"}</div>
      <div style={{ fontSize: 40 }}>{timer}</div>
      <div style={{ fontSize: 20 }}>{cycleCount}</div>
    </CircularProgressbarWithChildren>
  );
}
