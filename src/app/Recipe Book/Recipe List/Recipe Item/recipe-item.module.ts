import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeItem } from './recipe-item.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    RecipeItem
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
