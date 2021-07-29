import { Weather } from './cityReport.interface';

export interface WeekReportInterface {

  lon?: number;
  lat?: number;
  timezone?: string;
  timezone_offset?: number;
  current?: currentData;
  daily: currentData[];
}
// tslint:disable-next-line:class-name
export interface currentData {
  dt?: number;
  sunrise: number;
  sunset: number;
  temp?: {
    day?: number;
    eve?: number;
    max?: number;
    min?: number;
    morn?: number;
    night?: number;
  };
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  rain: {
    // @ts-ignore
    1
    h?: number;
  };
}
