import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Hero } from '../Hero';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  private apiUrl = 'http://localhost:3000/Heroes'
  private urlMix = 'http://localhost:3000/Heroes/?_embed=SuperPowers'

  constructor(private http: HttpClient) { }


testGetHeroes() {
  return this.http.get<any[]>(this.urlMix)
}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.apiUrl}/${hero.id}`;
    return this.http.delete<Hero>(url);
  }

  updateHero(hero: Hero): Observable<Hero> {
    const url = `${this.apiUrl}/${hero.id}`;
    return this.http.delete<Hero>(url);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiUrl, hero, httpOptions);
  }
}

