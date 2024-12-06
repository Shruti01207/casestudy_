import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  

  private weatherData = inject(WeatherDataService);
  private weatherData$:Subscription | undefined

  suggestedCity: any[] = [];
  searchText: string = "";
  data: any;
  currentDate: Date = new Date();
  isLoading: boolean = true;


  ngOnInit(): void {
    this.getData('Varanasi');
  }

  ngOnDestroy(): void {
    this.weatherData$?.unsubscribe( );
  }

  Search() {
    this.isLoading = true;
    this.getData(this.searchText);
  }



  getData(cityName: string) {
    this.weatherData$= this.weatherData.getGeoLocation(cityName)
      .subscribe((res) => {
        this.suggestedCity = res;

        if (res.length > 0) {
          const lat = this.suggestedCity[0].lat;
          const long = this.suggestedCity[0].lon;
          this.weatherData.getWeatherData(lat, long).subscribe((res) => {
          this.data = res;
          this.isLoading = false;

          });
        }
        else {
          let spinner = document.getElementById("spinner-container");
          (spinner as HTMLElement).innerText = "No city found";
        }

      })

  }

  getImageUrl() {
    if (this.data?.weather[0]?.main == 'Clouds') {
      return '../../assets/images/sky.png';
    }
    else if (this.data?.weather[0]?.main == 'Rain') {
      return './../assets/images/rain-svgrepo-com.svg'
    }
    else if (this.data?.weather[0]?.main == 'Mist') {
      return '../../assets/images/mist.png'
    }
    else {
      return '../../assets/images/sun-xxl.png'
    }
  }




}
