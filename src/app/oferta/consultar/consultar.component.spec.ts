import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOfertaComponent } from './consultar.component';

describe('ConsultarComponent', () => {
  let component: ConsultarOfertaComponent;
  let fixture: ComponentFixture<ConsultarOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
