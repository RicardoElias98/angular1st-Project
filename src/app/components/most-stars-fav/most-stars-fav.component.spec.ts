import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostStarsFavComponent } from './most-stars-fav.component';

describe('MostStarsFavComponent', () => {
  let component: MostStarsFavComponent;
  let fixture: ComponentFixture<MostStarsFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostStarsFavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostStarsFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
