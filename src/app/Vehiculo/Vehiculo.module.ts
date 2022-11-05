import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './Vehiculo.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [VehiculoListComponent],
  declarations: [VehiculoComponent,VehiculoListComponent]
})
export class VehiculoModule { }
