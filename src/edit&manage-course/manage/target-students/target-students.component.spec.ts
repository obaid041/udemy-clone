import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetStudentsComponent } from './target-students.component';

describe('TargetStudentsComponent', () => {
  let component: TargetStudentsComponent;
  let fixture: ComponentFixture<TargetStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
