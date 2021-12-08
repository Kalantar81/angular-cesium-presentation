import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDMapComponent } from './two-d-map.component';

describe('TwoDMapComponent', () => {
  let component: TwoDMapComponent;
  let fixture: ComponentFixture<TwoDMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
