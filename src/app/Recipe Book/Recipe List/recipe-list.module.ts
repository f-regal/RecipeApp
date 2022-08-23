import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeList } from './recipe-list.component';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    RecipeList
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
