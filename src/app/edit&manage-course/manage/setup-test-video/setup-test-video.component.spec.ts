import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTestVideoComponent } from './setup-test-video.component';

describe('SetupTestVideoComponent', () => {
  let component: SetupTestVideoComponent;
  let fixture: ComponentFixture<SetupTestVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupTestVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTestVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
