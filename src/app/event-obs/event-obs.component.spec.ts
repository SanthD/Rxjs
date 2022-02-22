import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventObsComponent } from './event-obs.component';

describe('EventObsComponent', () => {
  let component: EventObsComponent;
  let fixture: ComponentFixture<EventObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
