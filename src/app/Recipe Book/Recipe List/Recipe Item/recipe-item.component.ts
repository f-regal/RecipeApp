import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItem {

  @Input('recipeItem') recipe : Recipe;
  @Output() recipeSelected = new EventEmitter<{recipe: Recipe}>();
  title = 'RecipeItem';

  onSelectRecipe() {
    this.recipeSelected.emit({
      recipe: this.recipe
    })
  }
}
