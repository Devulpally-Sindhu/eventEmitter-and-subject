import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amm1Component } from './amm1.component';

describe('Amm1Component', () => {
  let component: Amm1Component;
  let fixture: ComponentFixture<Amm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Amm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Amm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
