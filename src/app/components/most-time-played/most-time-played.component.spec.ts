import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostTimePlayedComponent } from './most-time-played.component';

describe('MostTimePlayedComponent', () => {
  let component: MostTimePlayedComponent;
  let fixture: ComponentFixture<MostTimePlayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostTimePlayedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostTimePlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
