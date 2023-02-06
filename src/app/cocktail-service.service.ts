import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktail } from './models/cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("../assets/cocktails.json");
  }

}
