import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { COLORS } from "@/values/colors";

type CustomIconProps = {
  work: boolean;
  percentage: number;
  timer: string;
  cycleName: string;
  cycleCount: string;
};

export default function ProgressBar({
  work,
  percentage,
  timer,
  cycleName,
  cycleCount,
}: CustomIconProps) {
  const color = work ? COLORS.work : COLORS.break;

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
      <div style={{ fontSize: 20 }}>{cycleName}</div>
      <div style={{ fontSize: 40 }}>{timer}</div>
      <div style={{ fontSize: 20 }}>{cycleCount}</div>
    </CircularProgressbarWithChildren>
  );
}
