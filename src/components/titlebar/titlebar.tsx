import styles from "@/app/page.module.css";
import ButtonMinimize from "@/components/titlebar/buttonMinimize";
import ButtonClose from "@/components/titlebar/buttonClose";
import ButtonSettings from "@/components/titlebar/buttonSettings";
import ButtonInfo from "@/components/titlebar/buttonInfo";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";

export default function Titlebar() {
    const router = useRouter();
    const [activePage, setActivePage] = useState("");

    const navigate= (page: string) => {
        if (activePage === page) {
            router.push("/");
            setActivePage("");
        }
        else {
            router.push(`/${page}`);
            setActivePage(page);
        }
    }

    return (
        <div data-tauri-drag-region className={styles.titlebar}>
            <div className={styles.titlebarbuttonleft}>
                <ButtonSettings onClick={() => navigate("settings")} isActive={activePage === "settings"}/>
                <ButtonInfo onClick={() => navigate("info")} isActive={activePage === "info"} />
            </div>
            <div className={styles.titlebarbuttonright}>
                <ButtonMinimize />
                <ButtonClose />
            </div>
        </div>
    );
}