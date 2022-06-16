import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from './models/weather.model';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

secretAPIKey = environment.XRapidAPIKeyHeaderValue

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://community-open-weather-map.p.rapidapi.com/weather', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'community-open-weather-map.p.rapidapi.com')
      .set('X-RapidAPI-Key', this.secretAPIKey),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'imperial')
      .set('mode', 'json')
    })
  }
}
