import styles from "@/app/page.module.css"
import {MinimizeIcon} from "@/components/icons/MinimizeIcon";
import {useEffect} from "react";

export default function ButtonMinimize() {
    useEffect(() => {
        const appWindow = require("@tauri-apps/api/window").appWindow;

        const button = document.getElementById('button-minimize')!;
        button.addEventListener('click', () => appWindow.minimize());

        return () => {
           button.removeEventListener('click', () => appWindow.minimize());
        };
    }, []);

    return (
        <button className={styles.titlebarbutton} id="button-minimize"><MinimizeIcon color="#8C93A8" /></button>
    );
}