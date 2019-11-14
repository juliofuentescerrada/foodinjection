import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class FoodService {

  food = {name:'Pizza', icon:'🍕'};

  constructor() { }
}