import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade11 } from './atividade11';

describe('Atividade11', () => {
  let component: Atividade11;
  let fixture: ComponentFixture<Atividade11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade11],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
