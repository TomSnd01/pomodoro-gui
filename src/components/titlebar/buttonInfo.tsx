import styles from "@/components/titlebar/page.module.css";
import { InfoIcon } from "@/components/icons/titlebar/InfoIcon";
import { COLORS } from "@/values/colors";
import { MouseEventHandler } from "react";

type CustomProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};

export default function ButtonInfo({ onClick, isActive }: CustomProps) {
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
