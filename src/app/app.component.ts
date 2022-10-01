import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeApp';
  navigationOption : string = 'Recipes';

  setNavigationOption(navigationData: {navigateTo: string}) {
    this.navigationOption = navigationData.navigateTo;
  }
}
