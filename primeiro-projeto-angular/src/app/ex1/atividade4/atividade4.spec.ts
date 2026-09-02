import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade4 } from './atividade4';

describe('Atividade4', () => {
  let component: Atividade4;
  let fixture: ComponentFixture<Atividade4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade4],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
