import { Ingredient } from "./ingredients.model";

export class Recipe {
    constructor(public name: string = '',
        public description: string = '',
        public imagemPath: string = '',
        public ingredients: Ingredient[]
    ) { }
}