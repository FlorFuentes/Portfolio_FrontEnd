import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEdicionComponent } from './experiencia-edicion.component';

describe('ExperienciaEdicionComponent', () => {
  let component: ExperienciaEdicionComponent;
  let fixture: ComponentFixture<ExperienciaEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
