import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade9 } from './atividade9';

describe('Atividade9', () => {
  let component: Atividade9;
  let fixture: ComponentFixture<Atividade9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade9],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
