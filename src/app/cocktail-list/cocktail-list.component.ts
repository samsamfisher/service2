import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit{

  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailServiceService) { } 


  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(data => {
      this.cocktails = data;
    });
  }

}
