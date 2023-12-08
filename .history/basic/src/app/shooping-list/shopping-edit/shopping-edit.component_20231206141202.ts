import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('') nameInputRef: ElementRef
  @ViewChild('') amountInputRef: ElementRef
  onAddItem() {

  }
}
