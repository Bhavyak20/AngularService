import { EventEmitter, Injectable } from "@angular/core";
@Injectable()

export class CarService{

    getMechsList(){
        return ["John","Peter"];
    }
   VehiclesList(){
    return["Car","Bike","Bycycle"]
   }
   mecahnicEmitter=new EventEmitter<any>;
   RecieveMechanic(mechanicNotify:any){
    
    this.mecahnicEmitter.emit(mechanicNotify);
   }

   
}