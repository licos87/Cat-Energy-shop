import Hero from '@/pages_/home/ui/Hero';
import HowWork from '@/pages_/home/ui/HowWork';
import LiveModel from '@/pages_/home/ui/LiveModel';
import ProgramList from '@/pages_/home/ui/ProgramList';

import styles from './HomePage.module.css';

const HomePage = () => {
	return (
		<div className={styles.page}>
				<Hero />
				<ProgramList />
				<HowWork />
				<LiveModel />
		</div>
	);
};

export default HomePage;
