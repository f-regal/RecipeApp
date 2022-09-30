import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class Recipes {
  title = 'RecipeApp';
  recipe: Recipe;

  onRecipeSelectedInList(recipeData: {recipe: Recipe}) {
    this.recipe = recipeData.recipe
  }
}
