import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloproductosComponent } from './moduloproductos.component';

describe('ModuloproductosComponent', () => {
  let component: ModuloproductosComponent;
  let fixture: ComponentFixture<ModuloproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
