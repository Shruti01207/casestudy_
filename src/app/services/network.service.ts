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
  

  getArticles(cityName:any):Observable<string[]>{
    return this.http.get('http://localhost:3000/articles');
  }

 


}
