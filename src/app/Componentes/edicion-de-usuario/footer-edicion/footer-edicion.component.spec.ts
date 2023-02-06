import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEdicionComponent } from './footer-edicion.component';

describe('FooterEdicionComponent', () => {
  let component: FooterEdicionComponent;
  let fixture: ComponentFixture<FooterEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
