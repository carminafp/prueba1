import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasFormComponent } from './peliculas-form.component';

describe('PeliculasFormComponent', () => {
  let component: PeliculasFormComponent;
  let fixture: ComponentFixture<PeliculasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
