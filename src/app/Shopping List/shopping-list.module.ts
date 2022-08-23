import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingList } from './shopping-list.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    ShoppingList
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
