import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
    
})
export class HeaderComponent {
@Output() navigationChosen = new EventEmitter<{navigateTo: string}>();


onClickRecipes() {
    this.navigationChosen.emit({
        navigateTo: "Recipes"
    })
}

onClickShoppingList() {
    this.navigationChosen.emit({
        navigateTo: "ShoppingList"
    })
}
}