import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade7 } from './atividade7';

describe('Atividade7', () => {
  let component: Atividade7;
  let fixture: ComponentFixture<Atividade7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade7],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
