import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegistationComponent } from './event-registation.component';

describe('EventRegistationComponent', () => {
  let component: EventRegistationComponent;
  let fixture: ComponentFixture<EventRegistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRegistationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
