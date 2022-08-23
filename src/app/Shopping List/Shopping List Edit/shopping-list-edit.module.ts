import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingListEdit } from './shopping-list-edit.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    ShoppingListEdit
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
