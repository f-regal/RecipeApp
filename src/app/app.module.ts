import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipeDetail } from './Recipe Book/Recipe Detail/recipe-detail.component';
import { RecipeItem } from './Recipe Book/Recipe List/Recipe Item/recipe-item.component';
import { RecipeList } from './Recipe Book/Recipe List/recipe-list.component';
import { Recipes } from './Recipe Book/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListEdit } from './Shopping List/Shopping List Edit/shopping-list-edit.component';
import { ShoppingList } from './Shopping List/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingList,
    ShoppingListEdit,
    Recipes,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    DropdownDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
