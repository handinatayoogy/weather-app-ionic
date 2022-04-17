import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public data = [];
  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    this.WeatherService.getForecast().subscribe((result) => {
      this.data = result['list'];
    });
  }
}
