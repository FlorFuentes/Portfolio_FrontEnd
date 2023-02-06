import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEdicionComponent } from './banner-edicion.component';

describe('BannerEdicionComponent', () => {
  let component: BannerEdicionComponent;
  let fixture: ComponentFixture<BannerEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
