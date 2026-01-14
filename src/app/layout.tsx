import type { Metadata } from 'next';



import { Lato, Oswald } from 'next/font/google';






import './globals.css';
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${latoSans.variable} ${oswaldSans.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
