import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[]

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient()
    this.shoppingListService.ingrendientsChange.subscribe((ingredient: Ingredient[]) => {
      this.ingredients = ingredient
    })
  }
}
