import { Directive } from '@angular/core';
import { FoodService } from '../food.service';

@Directive({
  selector: '[appVegan]',
  providers: [
    { provide: FoodService, useValue: {food:'🥦'}}
  ]
})
export class VeganDirective {

  constructor() { }

}