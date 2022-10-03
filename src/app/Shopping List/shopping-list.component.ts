import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Component({
    selector:'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
    
})
export class ShoppingList {
    ingredients = [
        new Ingredient('Apples', '10'),
        new Ingredient('Pineapples', '20')
    ];

    constructor() {}

    ngOnInit() {

    }

    onItemAdded(itemData: {item: string, itemAmount: string}) {
        this.ingredients.push(new Ingredient(itemData.item, itemData.itemAmount));
    }
}

