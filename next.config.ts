import type { NextConfig } from 'next';





const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		rules: {
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							svgo: true,
							ref: true,
							typescript: true,
						},
					},
				],
				as: '*.js',
			},
		},
	},
	images: {
		dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'getfile.dokpub.com',
			},
			{
				protocol: 'http',
				hostname: '192.168.1.9',
				port: process.env.SERVER_PORT || '3001',
				pathname: '/images/**',
			},
			{
				protocol: 'https',
				hostname: process.env.NEXT_PUBLIC_API_URL || 'api.catenergy.ru',
				pathname: '/images/**',
			},
		],
		dangerouslyAllowSVG: process.env.NODE_ENV === 'development',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	allowedDevOrigins:
		process.env.NODE_ENV === 'development'
			? ['http://localhost:*'] : [],
};

export default nextConfig;
