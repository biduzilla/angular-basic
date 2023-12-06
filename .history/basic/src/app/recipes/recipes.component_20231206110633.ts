import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  // recipes:Recipe[] = [
  //   new Recipe(
  //     'test',
  //     'test desc',
  //     'C:/code/programacao/front/angular_basic/basic/src/assets/recipes.png'
  //   )
  // ];

  selectedRecipe: Recipe = new Recipe();

  constructor() {}

  ngOnInit() {

  }
}
