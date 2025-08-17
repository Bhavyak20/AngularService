import { Component } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CarService]
})
export class AppComponent {
  // title = 'AngularService';
  constructor(private carservice:CarService){

  }
  mechanics:any;
  getMecList(){
    this.mechanics=this.carservice.getMechsList()
  }
}
