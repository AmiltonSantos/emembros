import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Midias } from './midias';

describe('Midias', () => {
  let component: Midias;
  let fixture: ComponentFixture<Midias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Midias],
    }).compileComponents();

    fixture = TestBed.createComponent(Midias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
