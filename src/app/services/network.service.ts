import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../main/main.component';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }

  private http= inject(HttpClient);
  
  isAdded:BehaviorSubject<boolean>= new BehaviorSubject(false);
  formType:BehaviorSubject<string>=new BehaviorSubject('add')
  articleId:any="";

  getArticles( ):Observable<Article[]>{
    return this.http.get('http://localhost:3000/articles') as Observable<Article[]>;
  }

  addArticles(article:Article):Observable<Article[]>{
    return this.http.post('http://localhost:3000/articles',article) as Observable<Article[]>;
  }

  getArticleById(id:any):Observable<Article[]>{
    return this.http.get('http://localhost:3000/articles?id='+id) as Observable<Article[]>;
  }

  editArticle(article:Article,id:string){
    return this.http.patch('http://localhost:3000/articles/'+id,article) as Observable<Article[]>;
  }
 


}
