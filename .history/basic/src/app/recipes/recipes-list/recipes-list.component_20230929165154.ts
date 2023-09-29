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
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'
    ),new Recipe(
      'test',
      'test desc',
      'https://cdn-icons-png.flaticon.com/512/3565/3565418.png'
    )
  ]
}
