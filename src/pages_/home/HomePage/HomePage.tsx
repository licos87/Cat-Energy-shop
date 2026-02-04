import Hero from '@widgets/hero';
import ProgramList from '@widgets/program-list/ui/ProgramList';

import styles from './HomePage.module.css';

export const HomePage = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Hero />
				<ProgramList />
			</main>
		</div>
	);
};
