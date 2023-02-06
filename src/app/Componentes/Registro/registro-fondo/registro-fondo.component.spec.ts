import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFondoComponent } from './registro-fondo.component';

describe('RegistroFondoComponent', () => {
  let component: RegistroFondoComponent;
  let fixture: ComponentFixture<RegistroFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
