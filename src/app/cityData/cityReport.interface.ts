import {Coordinates} from '../report-data/cities.interface';

export interface ReportInterface {
  base?: string;
  clouds?: {
    all: number;
  };
  cod?: number;
  coord?: Coordinates;
  dt?: number;
  id?: number;
  main?: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name?: string;
  rain?: {
    // @ts-ignore
    1
    h: number;
  };
  sys?: {
    country: string;
    id: number;
  sunrise: number;
  sunset: number;
  type: number;
};
  timezone?: number;
  visibility?: number;
  weather?: Weather[];
  wind?: {
    deg: number;
    speed: number;
  };
}
export class Weather {
  description?: string;
  icon?: string;
  id?: number;
  main?: string;
}
