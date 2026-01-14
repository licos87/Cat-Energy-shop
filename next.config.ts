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
							typescript: true, // ← Для TS
						},
					},
				],
				as: '*.js',
			},
		},
	},
};

export default nextConfig;
