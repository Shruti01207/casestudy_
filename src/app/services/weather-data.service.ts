import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor() { }

  private http= inject(HttpClient);
  private apiKey='6c7a39bdcb10bef0e3963df5bf15df77'
  

  getGeoLocation(cityName:any):Observable<string[]>{
    return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${this.apiKey}`) as Observable<Array<string>>;
  }

  getWeatherData(lat:Number,long:Number){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${this.apiKey}`);
  }


}
