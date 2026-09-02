import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade3 } from './atividade3';

describe('Atividade3', () => {
  let component: Atividade3;
  let fixture: ComponentFixture<Atividade3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade3],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
