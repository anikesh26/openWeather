import { Component, OnInit } from '@angular/core';
import {ReportDataService} from './report-data.service';
// @ts-ignore
import cities from '../cityJson/cities.json';
import {CitiesInterface} from './cities.interface';
import {ReportInterface} from '../cityData/cityReport.interface';
import {DatePipe} from '@angular/common';
import {WeekReportInterface} from '../cityData/weekReport.interface';
@Component({
  selector: 'app-report-data',
  templateUrl: './report-data.component.html',
  styleUrls: ['./report-data.component.scss']
})
export class ReportDataComponent implements OnInit {
  public cityList: CitiesInterface[] = cities;
  selectedValue: CitiesInterface | undefined;
  weatherIconURL = 'https://openweathermap.org/img/w/';
  weatherMapData: ReportInterface | undefined;
  weekReport: WeekReportInterface | undefined;
  constructor(private service: ReportDataService, private date: DatePipe) { }
  ngOnInit(): void {}
  weatherData() {
    const selectedData: CitiesInterface = this.selectedValue as CitiesInterface;
    return this.service.getDailyWeatherReport(selectedData.coord.lat, selectedData.coord.lon).subscribe((res: WeekReportInterface) => {
      this.weekReport = res;
    });
  }
}

