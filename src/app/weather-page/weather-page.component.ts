import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})

export class WeatherPageComponent implements OnInit {

    constructor(private weatherService: WeatherService) {

    }

    cityName: string = 'Phoenix';
    weatherData?: WeatherData;

    ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
        next: (response) => {
        this.weatherData = response;
        console.log(response);
        }
    });
    }
}
