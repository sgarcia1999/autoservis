import { TestBed } from '@angular/core/testing';

import { CrearEmpleadoService } from './crear.empleado.service';

describe('CrearEmpleadoService', () => {
  let service: CrearEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
