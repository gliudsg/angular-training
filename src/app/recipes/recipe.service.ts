import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test RCP',
      'this is TST',
      'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'
    ),
    new Recipe(
      'test RCP 2222222222222',
      'this is TST',
      'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'
    ),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}