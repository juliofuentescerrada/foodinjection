import { Component, ViewEncapsulation } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  
  get food() { return this.foodService.food;}
  
  constructor(private foodService: FoodService){}
}
