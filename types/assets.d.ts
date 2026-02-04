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
	import * as React from 'react';
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
