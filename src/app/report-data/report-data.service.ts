import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WeekReportInterface} from '../cityData/weekReport.interface';
import {Observable} from 'rxjs';
import {ReportInterface} from '../cityData/cityReport.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {

  constructor(private http: HttpClient) { }

  getWeather(id: number): Observable<ReportInterface>  {
    return this.http.get<ReportInterface>(`${environment.apiUrl}weather?id=${id}&units=metric&appid=${environment.apiKey}`);
  }
  getDailyWeatherReport(latitude: number, longitude: number): Observable<WeekReportInterface> {
    return this.http.get<WeekReportInterface>(`${environment.apiUrl}onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${environment.apiKey}`);
  }
}
