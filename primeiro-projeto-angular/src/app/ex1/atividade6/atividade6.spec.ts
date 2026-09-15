import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade6 } from './atividade6';

describe('Atividade6', () => {
  let component: Atividade6;
  let fixture: ComponentFixture<Atividade6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade6],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
