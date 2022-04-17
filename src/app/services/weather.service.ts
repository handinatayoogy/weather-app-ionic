import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'cc6f097460d6930df583d78961293dcc';
  key2 = '61a42bca3b7345a33d5cd78f194a7efd';
  city = 'Banjarnegara';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(
      `${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`
    );
  }

  getForecast() {
    return this.http.get(
      `${this.url}forecast?q=${this.city}&appid=${this.key2}&units=metric`
    );
  }
}
