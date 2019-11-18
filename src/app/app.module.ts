import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { BurgerComponent } from './burger/burger.component';
import { VeganDirective } from './vegan.directive';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FoodComponent, BurgerComponent, VeganDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
