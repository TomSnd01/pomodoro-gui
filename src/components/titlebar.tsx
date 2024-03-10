import styles from "@/app/page.module.css";
import ButtonMinimize from "@/components/buttonMinimize";
import ButtonClose from "@/components/buttonClose";

export default function Titlebar() {
    return (
        <div data-tauri-drag-region className={styles.titlebar}>
            <ButtonMinimize />
            <ButtonClose />
        </div>
    );
}