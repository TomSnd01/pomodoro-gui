import styles from "@/app/settings/page.module.css";
import { COLORS } from "@/values/colors";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

interface SettingsData {
  focus_duration: number;
  short_break: number;
  long_break: number;
  cycle_count: number;
}

export default function SettingsGrid() {
  const [data, setData] = useState<SettingsData>();

  useEffect(() => {
    invoke<string>("get_config_data")
      .then((jsonString) => {
        const result: SettingsData = JSON.parse(jsonString);
        setData(result);
      })
      .catch(console.error);
  }, []);

  const handleChange = (id: string, value: string) => {
    let valueInt: number = parseInt(value);
    invoke<string>("set_config_data", { target: id, value: valueInt });
  };

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
      <input
        id="focus_duration"
        className={styles.input}
        type="number"
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        defaultValue={data?.focus_duration}
      />
      <h1 className={styles.textItems} style={{ color: COLORS.short_break }}>
        Short Break
      </h1>
      <input
        id="short_break"
        className={styles.input}
        type="number"
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        defaultValue={data?.short_break}
      />
      <h1 className={styles.textItems} style={{ color: COLORS.long_break }}>
        Long Break
      </h1>
      <input
        id="long_break"
        className={styles.input}
        type="number"
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        defaultValue={data?.long_break}
      />
      <h1 className={styles.textItems} style={{ color: COLORS.blue }}>
        Cycle Count
      </h1>
      <input
        id="cycle_count"
        className={styles.input}
        type="number"
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        defaultValue={data?.cycle_count}
      />
    </div>
  );
}
