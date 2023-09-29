import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes:Recipe[] = [
    new Recipe(
      'test',
      'test desc',
      'https://github.com/biduzilla/angular-basic/blob/main/basic/src/assets/recipes.png'
    )
  ]
}
