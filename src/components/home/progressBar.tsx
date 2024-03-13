import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import {COLORS} from "@/values/colors";

type CustomIconProps = {
    work: boolean;
    percentage: number;
}

export default function ProgressBar({work, percentage}: CustomIconProps) {
    const color = work ? COLORS.work : COLORS.break;

    return (
        <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={5}
            styles={{
                root: {
                    blockSize: 200,
                },
                path: {
                    stroke: color,
                },
                trail: {
                    stroke: "#919191"
                }
            }}
            counterClockwise
        >
        </CircularProgressbarWithChildren>
    )
}