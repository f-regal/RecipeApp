import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-shopping-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
    
})
export class ShoppingListEdit {
    @Output() itemAdded = new EventEmitter<{item: string, itemAmount: string }>();

    onAddShoppingItem(shoppingItem: HTMLInputElement, shoppingItemAmount: HTMLInputElement) {        
        this.itemAdded.emit({
            item: shoppingItem.value, 
            itemAmount: shoppingItemAmount.value
        })
    }

}