import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingrendient.model";
import { ShoppingListService } from "../shopping-list/shooping-list.service";



@Injectable({providedIn: 'root'})
export class RecipeService{
  recipeChange = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
      new Recipe(
        'A Test Recipe',
        'A Desc Test',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mint-chutney-pudina-chutney-recipe.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('Frech Fries', 20),
        ]
      ),
      new Recipe(
        'Another Test Recipe',
        'A Desc Test',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mint-chutney-pudina-chutney-recipe.jpg',
        [
          new Ingredient('Buns', 1),
          new Ingredient('Meat', 2),
        ]
      )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChange.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChange.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice())

  }
}