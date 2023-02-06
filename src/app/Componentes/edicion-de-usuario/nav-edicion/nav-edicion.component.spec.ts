import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEdicionComponent } from './nav-edicion.component';

describe('NavEdicionComponent', () => {
  let component: NavEdicionComponent;
  let fixture: ComponentFixture<NavEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
