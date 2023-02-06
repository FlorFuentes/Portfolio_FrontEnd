import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDeUsuarioComponent } from './edicion-de-usuario.component';

describe('EdicionDeUsuarioComponent', () => {
  let component: EdicionDeUsuarioComponent;
  let fixture: ComponentFixture<EdicionDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
