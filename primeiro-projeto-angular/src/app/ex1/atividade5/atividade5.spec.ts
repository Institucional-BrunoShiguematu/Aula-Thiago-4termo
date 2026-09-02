import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade5 } from './atividade5';

describe('Atividade5', () => {
  let component: Atividade5;
  let fixture: ComponentFixture<Atividade5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade5],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
