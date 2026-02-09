import { YMap } from '@types/yandex-maps';

declare global {

	interface Window {
		map: YMap;
	}
}
