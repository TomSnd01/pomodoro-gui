import styles from "@/app/page.module.css";
import { InfoIcon } from "@/components/icons/InfoIcon";
import { COLORS } from "@/values/colors";
import { MouseEventHandler } from "react";

type CustomIconProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};

export default function ButtonInfo({ onClick, isActive }: CustomIconProps) {
  return (
    <button
      onClick={onClick}
      className={styles.titlebarbuttonleft}
      id="button-info"
    >
      <InfoIcon
        size={20}
        color={isActive ? COLORS.otherhighlight : COLORS.mainhighlight}
      />
    </button>
  );
}
