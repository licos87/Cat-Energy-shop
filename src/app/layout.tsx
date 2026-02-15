import type { Metadata } from 'next';

import { Lato, Oswald } from 'next/font/google';

import './styles/globals.css';

import Footer from '@widgets/footer';
import Header from '@widgets/header';

const latoSans = Lato({
	weight: ['400'],
	variable: '--font-lato',
	subsets: ['latin'],
});

const oswaldSans = Oswald({
	weight: ['400'],
	variable: '--font-oswald',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Cat Energy',
	description: 'Функциональное питание для котов',
	icons: {
		icon: ['/favicon/favicon.svg', '/favicon/favicon-96x96.png'],
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${latoSans.variable} ${oswaldSans.variable}`} style={{minHeight: '100vh', justifyContent: 'space-between'}}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
