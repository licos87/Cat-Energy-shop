declare namespace ymaps {
  export function ready(callback: () => void): void;

  export class Map {
    constructor(element: string | HTMLElement, state: IMapState);
    destroy(): void;
    geoObjects: IGeoObjectCollection;
  }

  export interface IMapState {
    center: [number, number];
    zoom: number;
    controls?: string[];
  }

  export class Placemark {
    constructor(geometry: [number, number], properties: object, options: IPlacemarkOptions);
  }

  export interface IPlacemarkOptions {
    iconLayout?: string;
    iconImageHref?: string;
    iconImageSize?: [number, number];
    iconImageOffset?: [number, number];
  }

  export interface IGeoObjectCollection {
    add(object: Placemark): IGeoObjectCollection;
  }
}

interface Window {
  ymaps: typeof ymaps;
}
