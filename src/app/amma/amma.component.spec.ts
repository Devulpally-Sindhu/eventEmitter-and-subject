import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmaComponent } from './amma.component';

describe('AmmaComponent', () => {
  let component: AmmaComponent;
  let fixture: ComponentFixture<AmmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
