import Hero from '@pages_/home/ui/Hero';
import ProgramList from '@pages_/home/ui/ProgramList';

import styles from './HomePage.module.css';
import HowWork from '@pages_/home/ui/HowWork';
import LiveModel from '@pages_/home/ui/LiveModel';

const HomePage = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Hero />
				<ProgramList />
				<HowWork />
				<LiveModel/>
			</main>
		</div>
	);
};

export default HomePage;
