import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Recipes } from './recipes.component';
import { AppComponent } from 'src/app/app.component';
import { RecipeList } from './Recipe List/recipe-list.component';
import { RecipeDetail } from './Recipe Detail/recipe-detail.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
