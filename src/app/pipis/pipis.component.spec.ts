import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipisComponent } from './pipis.component';

describe('PipisComponent', () => {
  let component: PipisComponent;
  let fixture: ComponentFixture<PipisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
