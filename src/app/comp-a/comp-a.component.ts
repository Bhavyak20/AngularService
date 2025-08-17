import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  // providers:[CarService]
})
export class CompAComponent {
constructor (private carser: CarService){
}
vehciles:any
vechiclesFunction(){
  this.vehciles=this.carser.VehiclesList();
}
//   mechanicslist:any;
//   getMechsList(){
//    this.mechanicslist= this.carser.getMechsList();
//   }

sendMechanic(){
  let mechanicName="Raju"
  this.carser.RecieveMechanic(mechanicName)
}

}
