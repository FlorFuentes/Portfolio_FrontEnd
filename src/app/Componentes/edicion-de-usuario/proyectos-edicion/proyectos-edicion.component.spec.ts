import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEdicionComponent } from './proyectos-edicion.component';

describe('ProyectosEdicionComponent', () => {
  let component: ProyectosEdicionComponent;
  let fixture: ComponentFixture<ProyectosEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
