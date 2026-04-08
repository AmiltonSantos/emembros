import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ensino } from './ensino';

describe('Ensino', () => {
  let component: Ensino;
  let fixture: ComponentFixture<Ensino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ensino],
    }).compileComponents();

    fixture = TestBed.createComponent(Ensino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
