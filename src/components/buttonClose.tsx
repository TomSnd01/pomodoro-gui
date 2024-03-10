import styles from "@/app/page.module.css"
import {CloseIcon} from "@/components/icons/CloseIcon";
import {useEffect} from "react";

export default function ButtonClose() {
useEffect(() => {
        const appWindow = require("@tauri-apps/api/window").appWindow;

        const button = document.getElementById('button-close')!;
        button.addEventListener('click', () => appWindow.close());

        return () => {
            button.removeEventListener('click', () => appWindow.close());
        };
    }, []);

    return (
        <button className={styles.titlebarbutton} id="button-close"><CloseIcon color="#8C93A8" /></button>
    );
}