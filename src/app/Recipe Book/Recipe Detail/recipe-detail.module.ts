import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeDetail } from './recipe-detail.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    RecipeDetail
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
