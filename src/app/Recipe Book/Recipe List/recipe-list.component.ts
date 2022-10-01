import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeList {
  title = 'RecipeList';
  recipes: Recipe[] = [ 
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg') 
  ]
  @Output() recipeSelectedInlist = new EventEmitter<{recipe: Recipe}>();

  onRecipeSelected(recipeData: {recipe: Recipe}) {
    this.recipeSelectedInlist.emit({
      recipe: recipeData.recipe
    })
    
  }
}
