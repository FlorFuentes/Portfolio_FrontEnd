import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesEdicionComponent } from './habilidades-edicion.component';

describe('HabilidadesEdicionComponent', () => {
  let component: HabilidadesEdicionComponent;
  let fixture: ComponentFixture<HabilidadesEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
