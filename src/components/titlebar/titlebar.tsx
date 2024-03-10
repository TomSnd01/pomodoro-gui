import styles from "@/app/page.module.css";
import ButtonMinimize from "@/components/titlebar/buttonMinimize";
import ButtonClose from "@/components/titlebar/buttonClose";
import ButtonSettings from "@/components/titlebar/buttonSettings";
import ButtonInfo from "@/components/titlebar/buttonInfo";

export default function Titlebar() {
    return (
        <div data-tauri-drag-region className={styles.titlebar}>
            <div className={styles.titlebarbuttonleft}>
                <ButtonSettings />
                <ButtonInfo />
            </div>
            <div className={styles.titlebarbuttonright}>
                <ButtonMinimize />
                <ButtonClose />
            </div>
        </div>
    );
}