import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService {
    ingrendientsChange = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 5),
    ];

    getIngredient() {
        return this.ingredients.slice()
    }

    addIngrendient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingrendientsChange.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingrendientsChange.emit(this.ingredients.slice())
    }
}