import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade10 } from './atividade10';

describe('Atividade10', () => {
  let component: Atividade10;
  let fixture: ComponentFixture<Atividade10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade10],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
