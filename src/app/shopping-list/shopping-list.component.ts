import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrendient.model';
import { ShoppingListService } from './shooping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  // private igChangeSub: Subscription;

  //Ichanged the igChangeSub property to just subscription. 
  private subscription: Subscription; 
  constructor(private slService: ShoppingListService){}
  
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription =  this.slService.ingredientChanged.subscribe(
      (ingredients) => {
        this.ingredients = ingredients
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
  
}
