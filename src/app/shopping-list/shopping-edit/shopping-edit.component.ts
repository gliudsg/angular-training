import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
  Output
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService:ShoppingListService) {}
  ngOnInit() {}
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredint = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredint);
    // this.ingredientAdded.emit(newIngredint);
  }
}
