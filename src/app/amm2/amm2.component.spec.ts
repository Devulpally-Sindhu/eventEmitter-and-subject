import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amm2Component } from './amm2.component';

describe('Amm2Component', () => {
  let component: Amm2Component;
  let fixture: ComponentFixture<Amm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Amm2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Amm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
