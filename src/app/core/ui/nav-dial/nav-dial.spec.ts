import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDial } from './nav-dial';

describe('NavDial', () => {
  let component: NavDial;
  let fixture: ComponentFixture<NavDial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavDial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
