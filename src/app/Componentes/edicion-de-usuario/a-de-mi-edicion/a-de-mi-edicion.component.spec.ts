import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADeMiEdicionComponent } from './a-de-mi-edicion.component';

describe('ADeMiEdicionComponent', () => {
  let component: ADeMiEdicionComponent;
  let fixture: ComponentFixture<ADeMiEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADeMiEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADeMiEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
