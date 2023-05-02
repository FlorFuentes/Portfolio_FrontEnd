import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHabilidadesComponent } from './crear-habilidades.component';

describe('CrearHabilidadesComponent', () => {
  let component: CrearHabilidadesComponent;
  let fixture: ComponentFixture<CrearHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
