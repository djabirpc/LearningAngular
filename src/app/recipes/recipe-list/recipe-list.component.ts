import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Desc Test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mint-chutney-pudina-chutney-recipe.jpg'
      ),
    new Recipe(
      'A Test Recipe',
      'A Desc Test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mint-chutney-pudina-chutney-recipe.jpg'
      )
  ];
}
