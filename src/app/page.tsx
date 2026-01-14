import styles from "./page.module.css";
import { JSX } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Cat Energy",
	description: "Функциональное питание для котов",
};

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      </main>
    </div>
  );
}
