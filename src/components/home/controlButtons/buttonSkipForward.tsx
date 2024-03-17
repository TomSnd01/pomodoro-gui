import styles from "../page.module.css";
import { SkipForwardIcon } from "@/components/icons/home/SkipForwardIcon";

type CustomIconProps = {};

export default function ButtonSkipForward() {
  return (
    <button className={styles.svgIcon}>
      <SkipForwardIcon size={24} />
    </button>
  );
}
