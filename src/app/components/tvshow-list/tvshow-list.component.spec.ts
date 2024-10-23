import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowListComponent } from './tvshow-list.component';

describe('TVShowListComponent', () => {
  let component: TVShowListComponent;
  let fixture: ComponentFixture<TVShowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TVShowListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
