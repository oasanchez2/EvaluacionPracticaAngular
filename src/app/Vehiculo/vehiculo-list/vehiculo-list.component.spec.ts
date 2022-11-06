/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../Vehiculo';
import { faker } from '@faker-js/faker';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(2), faker.datatype.string(10),faker.datatype.string(8),faker.datatype.string(10),faker.datatype.number(4),faker.datatype.string(6),faker.datatype.string(50)
        );

      component.vehiculosList.push(vehiculo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 vehiculos + head for table', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

});
