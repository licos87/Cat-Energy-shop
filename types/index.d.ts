declare global {
	interface Window {
		map: import('@types/yandex-maps').YMap;
	}
}

declare module '*.png' {
	const content: import('next/image').StaticImageData;
	export default content;
}

declare module '*.jpg' {
	const content: import('next/image').StaticImageData;
	export default content;
}

declare module '*.jpeg' {
	const content: import('next/image').StaticImageData;
	export default content;
}

declare module '*.gif' {
	const content: import('next/image').StaticImageData;
	export default content;
}

declare module '*.svg' {
	import { FC, SVGProps } from 'react';
	const content: FC<SVGProps<SVGElement>>;
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}

export {};
