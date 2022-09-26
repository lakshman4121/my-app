import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public filterTerm:string ="";
  public column:string= "";
  public order:string = "";
  public Vehicles:Vehicle[] = [];

  constructor(private _vehicleService:VehicleService, private router:Router) { 
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.Vehicles = data;

      },
      (err:any)=>{
        alert('Internal serve error');
      }

    )
  }

  ngOnInit(): void {
  }
filter(){
  this._vehicleService.getfilterVehicles(this.filterTerm).subscribe(
    (data:any)=>{
      this.Vehicles = data;

    },
    (err:any)=>{
      alert('Internal serve error');
    }
  )
}


  delete(id:string) { 
    this._vehicleService.deleteVehiles(id).subscribe(
      (data:any)=>{
       alert("delete successfilly !!!");
       location.reload();

      },
      (err:any)=>{
        alert('Internal serve error');
      }
    )
    }
    page(pageNo:number){
      this._vehicleService.getPagedVehicles(pageNo).subscribe(
        (data:any)=>{
          this.Vehicles = data;
    
        },
        (err:any)=>{
          alert('Internal serve error');
        }
      )
    }
    sort(){
      this._vehicleService.getSortVehicles(this.column,this.order).subscribe(
        (data:any)=>{
          this.Vehicles = data;
    
        },
        (err:any)=>{
          alert('Internal serve error');
        }
      )
    }
    view(id:string){
      this.router.navigateByUrl('/dashboard/vehicle-details'+'/'+id);

    }
    edit(id:string){
      this.router.navigateByUrl('/dashboard/edit-vehicle'+'/'+id);

    }

}
