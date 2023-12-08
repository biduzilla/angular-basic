import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',5),
  ];

  constructor(){}
  ngOnInit() {}

  onIngredinentsAdd(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
