import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Congregacao } from './congregacao';

describe('Congregacao', () => {
  let component: Congregacao;
  let fixture: ComponentFixture<Congregacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Congregacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Congregacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
