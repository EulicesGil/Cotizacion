import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertarcotizacionComponent } from './ofertarcotizacion.component';

describe('OfertarcotizacionComponent', () => {
  let component: OfertarcotizacionComponent;
  let fixture: ComponentFixture<OfertarcotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertarcotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertarcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
