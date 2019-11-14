import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
  providers: [
    { provide: FoodService, useValue: {food: {name:'Burger', icon:'🍔'}}}
  ]
})
export class BurgerComponent implements OnInit {

  get food() { return this.foodService.food;}
  
  constructor(private foodService: FoodService){}

  ngOnInit() {
  }

}