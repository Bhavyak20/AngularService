import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {

  mechanic:any;
  constructor(private carservice:CarService){

    carservice.mecahnicEmitter.subscribe((name)=>{
      console.log("Mechanic recieved and his name is:" +name)
      this.mechanic=name;
    })
  }
}
