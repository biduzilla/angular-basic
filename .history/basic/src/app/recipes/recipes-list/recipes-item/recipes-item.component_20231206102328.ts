import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe();
  @Output recipeSelected = new EventEmitter<void>()

  onSelected(){

  }

  constructor() {
  }

  ngOnInit() {
  }

}
