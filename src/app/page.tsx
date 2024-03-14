'use client'

import styles from "./page.module.css"
import ProgressBar from "@/components/home/progressBar/progressBar";

export default function Home() {
    return (
        <main className={styles.home}>
            <ProgressBar work={true} percentage={66} timer={"22:51"}/>
        </main>
    );
}
