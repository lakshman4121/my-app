import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistationComponent } from './student-registation.component';

describe('StudentRegistationComponent', () => {
  let component: StudentRegistationComponent;
  let fixture: ComponentFixture<StudentRegistationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegistationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegistationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
