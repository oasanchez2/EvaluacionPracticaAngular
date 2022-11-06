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
  counterMarcas: any[] = [];

  getVehiculos():void{
    this.vehiculoService.getVehiculos().subscribe((data) =>{
      this.vehiculosList = data;

      let marcas = Array.from(new Set(this.vehiculosList.map(x => x.marca)));
      this.counterMarcas = marcas.map(mar => {
          return {marca: mar, count: 0};
      });

     this.counterMarcas.map((countMarc, i) =>{
          const actualMarcaLength =  this.vehiculosList.filter(number => number.marca === countMarc.marca).length;
          countMarc.count = actualMarcaLength;
      })

    });

  }



  ngOnInit() {
    this.getVehiculos();
  }

}
