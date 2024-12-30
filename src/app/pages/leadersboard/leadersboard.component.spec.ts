import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersboardComponent } from './leadersboard.component';

describe('LeadersboardComponent', () => {
  let component: LeadersboardComponent;
  let fixture: ComponentFixture<LeadersboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadersboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadersboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
