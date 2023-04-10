import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrendient.model';
import { ShoppingListService } from './shooping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService){}
  
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChanged.subscribe(
      (ingredients) => {
        this.ingredients = ingredients
      }
    )
  }

  
}
