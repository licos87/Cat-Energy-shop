import styles from './HomePage.module.css';
import Hero from '@widgets/hero';

export const HomePage = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Hero/>

			</main>
		</div>
	);
};
