import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadeTecnicasComponent } from './habilidade-tecnicas.component';

describe('HabilidadeTecnicasComponent', () => {
  let component: HabilidadeTecnicasComponent;
  let fixture: ComponentFixture<HabilidadeTecnicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadeTecnicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadeTecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
