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
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { LoggingService } from './services/logging.service';
import { AccountsService } from './services/accounts.service';
import { UsersComponent } from './users/users.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { CounterService } from './users/counter.service';

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
    DropdownDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggingService,
    AccountsService,
    CounterService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
