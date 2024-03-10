import styles from "@/app/page.module.css"
import {InfoIcon} from "@/components/icons/InfoIcon";
import {COLORS} from "@/values/colors";

export default function ButtonInfo() {
    return (
        <button className={styles.titlebarbuttonleft} id="button-info"><InfoIcon size={20} color={COLORS.mainhighlight} /></button>
    );
}