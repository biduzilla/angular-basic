import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>()

  onSelected(){
    this.recipeSelected.emit(this.recipe)
  }

  constructor() {
  }

  ngOnInit() {
  }

}
