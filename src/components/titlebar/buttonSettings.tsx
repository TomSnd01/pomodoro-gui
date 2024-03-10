import styles from "@/app/page.module.css"
import {SettingsIcon} from "@/components/icons/SettingsIcon";
import {COLORS} from "@/values/colors";
import { useRouter, usePathname } from "next/navigation";

export default function ButtonSettings() {
    const router = useRouter();
    const pathname = usePathname();

    const navigate = () => {
        const targetRoute = pathname === '/settings' ? '/' : '/settings'
        router.push(targetRoute);
    }

    return (
        <button onClick={navigate} className={styles.titlebarbuttonleft} id="button-settings"><SettingsIcon size={18} color={COLORS.mainhighlight} /></button>
    );
}