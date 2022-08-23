import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Recipes } from './recipes.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    Recipes
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
