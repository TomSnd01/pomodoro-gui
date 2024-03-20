import styles from "../page.module.css";
import { SkipBackwardIcon } from "@/components/icons/home/SkipBackwardIcon";

type CustomProps = {};

export default function ButtonSkipBackward() {
  return (
    <button className={styles.svgIcon}>
      <SkipBackwardIcon size={24} />
    </button>
  );
}
