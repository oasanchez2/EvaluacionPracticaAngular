import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../Vehiculo';
import { VehiculoService } from '../Vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  vehiculosList: Array<Vehiculo> = [];

  getVehiculos():void{
    this.vehiculoService.getVehiculos().subscribe((data) =>{
      this.vehiculosList = data;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
