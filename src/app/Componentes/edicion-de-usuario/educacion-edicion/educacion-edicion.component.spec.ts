import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEdicionComponent } from './educacion-edicion.component';

describe('EducacionEdicionComponent', () => {
  let component: EducacionEdicionComponent;
  let fixture: ComponentFixture<EducacionEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
