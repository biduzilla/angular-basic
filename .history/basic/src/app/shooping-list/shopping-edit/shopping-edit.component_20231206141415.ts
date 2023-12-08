import { Component, ElementRef, ViewChild,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  ingredientsAdd = new EventEmitter<Ingredient>();

  onAddItem() {
const newIngredient = new Ingredient(this.nameInput.value, this.amountInput.value)
  }
}
