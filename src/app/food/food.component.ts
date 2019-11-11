import { Component, OnInit, Optional } from '@angular/core';
import { FoodService } from '../../food.service';
import { VeganDirective } from '../vegan.directive';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

    get food() { return this.foodService.food;}
  
  constructor(
    private foodService: FoodService,
    @Optional() private veganDirective: VeganDirective,
    ){
      if(veganDirective){
        this.foodService.food = '🥗'
      }
      
    }

  ngOnInit() {
  }

}