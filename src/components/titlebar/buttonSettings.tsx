import styles from "@/components/titlebar/page.module.css";
import { SettingsIcon } from "@/components/icons/titlebar/SettingsIcon";
import { COLORS } from "@/values/colors";
import { MouseEventHandler } from "react";

type CustomIconProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};

export default function ButtonSettings({ onClick, isActive }: CustomIconProps) {
  return (
    <button
      onClick={onClick}
      className={styles.titlebarbuttonleft}
      id="button-settings"
    >
      <SettingsIcon
        size={18}
        color={isActive ? COLORS.otherhighlight : COLORS.mainhighlight}
      />
    </button>
  );
}
