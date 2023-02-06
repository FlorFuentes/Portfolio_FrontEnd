import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfondoComponent } from './loginfondo.component';

describe('LoginfondoComponent', () => {
  let component: LoginfondoComponent;
  let fixture: ComponentFixture<LoginfondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfondoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
