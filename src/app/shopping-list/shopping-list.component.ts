import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('banana', 6),
  ];
  constructor() {}
  ngOnInit(): void {}
  onIngredientAdded(ingredient: Ingredient){
    console.log(ingredient)
    this.ingredients.push(ingredient)
  }
}
