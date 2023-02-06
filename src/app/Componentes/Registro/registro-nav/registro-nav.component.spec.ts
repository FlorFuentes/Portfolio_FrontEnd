import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNavComponent } from './registro-nav.component';

describe('RegistroNavComponent', () => {
  let component: RegistroNavComponent;
  let fixture: ComponentFixture<RegistroNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
