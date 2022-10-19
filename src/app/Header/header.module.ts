import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
