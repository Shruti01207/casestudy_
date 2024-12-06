import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../main/main.component';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }

  private http= inject(HttpClient);
  private apiKey='6c7a39bdcb10bef0e3963df5bf15df77'
  

  getArticles( ):Observable<Article[]>{
    return this.http.get('http://localhost:3000/articles') as Observable<Article[]>;
  }

  addArticles(article:Article):Observable<Article[]>{
    return this.http.post('http://localhost:3000/articles',article) as Observable<Article[]>;
  }

 


}
