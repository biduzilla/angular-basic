import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent {
  ingredients: Ingredients = [
    new Ingredients('Apple',5),
    new Ingredients('Tomate',5),
  ];

  ngOnInit() {}
}
