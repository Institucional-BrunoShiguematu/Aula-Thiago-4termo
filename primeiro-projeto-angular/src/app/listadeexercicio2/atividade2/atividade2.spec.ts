import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade2 } from './atividade2';

describe('Atividade2', () => {
  let component: Atividade2;
  let fixture: ComponentFixture<Atividade2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade2],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
