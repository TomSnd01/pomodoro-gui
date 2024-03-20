import styles from "@/app/settings/page.module.css";
import { COLORS } from "@/values/colors";

type CustomProps = {
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  cycleCount: number;
};

export default function SettingsGrid({
  focusDuration,
  shortBreakDuration,
  longBreakDuration,
  cycleCount,
}: CustomProps) {
  return (
    <div className={styles.grid}>
      <h1
        className={styles.headers}
        style={{ justifySelf: "start", marginLeft: 28 }}
      >
        Phase
      </h1>
      <h1 className={styles.headers}>Duration</h1>
      <h1 className={styles.textItems} style={{ color: COLORS.focus }}>
        Focus
      </h1>
      <input className={styles.input} value={focusDuration} />
      <h1 className={styles.textItems} style={{ color: COLORS.short_break }}>
        Short Break
      </h1>
      <input className={styles.input} value={shortBreakDuration} />
      <h1 className={styles.textItems} style={{ color: COLORS.long_break }}>
        Long Break
      </h1>
      <input className={styles.input} value={longBreakDuration} />
      <h1 className={styles.textItems} style={{ color: COLORS.blue }}>
        Cycle Count
      </h1>
      <input className={styles.input} value={cycleCount} />
    </div>
  );
}
