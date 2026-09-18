import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade12 } from './atividade12';

describe('Atividade12', () => {
  let component: Atividade12;
  let fixture: ComponentFixture<Atividade12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade12],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
