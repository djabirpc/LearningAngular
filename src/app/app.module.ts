import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ServerTestComponent } from './server-test/server-test.component';
import { CockpitComponent } from './server-test/cockpit/cockpit.component';
import { ServerElementComponent } from './server-test/server-element/server-element.component';
import { GameChallengeComponent } from './game-challenge/game-challenge.component';
import { GameControlComponent } from './game-challenge/game-control/game-control.component';
import { EvenComponent } from './game-challenge/even/even.component';
import { OddComponent } from './game-challenge/odd/odd.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServerTestComponent,
    CockpitComponent,
    ServerElementComponent,
    GameChallengeComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
