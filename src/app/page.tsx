'use client'

import styles from "./page.module.css"
import ProgressBar from "@/components/home/progressBar";

export default function Home() {
    return (
        <main className={styles.home}>
            <ProgressBar work={true} percentage={66}/>
        </main>
    );
}
