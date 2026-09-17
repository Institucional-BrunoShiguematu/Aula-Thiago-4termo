import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade8 } from './atividade8';

describe('Atividade8', () => {
  let component: Atividade8;
  let fixture: ComponentFixture<Atividade8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Atividade8],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
