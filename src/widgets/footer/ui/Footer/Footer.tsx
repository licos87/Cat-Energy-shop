import styles from './Footer.module.css';
import YandexMap from '@widgets/yandex-map';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.mapContainer}>
				<YandexMap
					center={[59.938635, 30.323118]}
					zoom={15}
					className={styles.map}
				/>
			</div>
			<div className={styles.content}>
				{/* Здесь будет остальной контент футера */}
				<div className={styles.contacts}>
					<b className={styles.contactsTitle}>Приглашаем к сотрудничеству дилеров!</b>
					<address className={styles.address}>
						ул. Большая Конюшенная, д. 19/8
						<span>Санкт-Петербург</span>
					</address>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
