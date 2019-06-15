import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageComponent } from '../../edit&manage-course/manage/manage.component';
import { CourseStructureComponent } from '../../edit&manage-course/manage/course-structure/course-structure.component';
import { CurriculumComponent } from '../../edit&manage-course/manage/curriculum/curriculum.component';
import { FilmEditComponent } from '../../edit&manage-course/manage/film-edit/film-edit.component';
import { SetupTestVideoComponent } from '../../edit&manage-course/manage/setup-test-video/setup-test-video.component';
import { TargetStudentsComponent } from '../../edit&manage-course/manage/target-students/target-students.component';
import { ManageRoutingModule } from '../../edit&manage-course/manage/manage-routing.module';


@NgModule({
  declarations: [
    CourseStructureComponent,
    CurriculumComponent,
    FilmEditComponent,
    SetupTestVideoComponent,
    TargetStudentsComponent,
    ManageComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ManageRoutingModule,
  ],
  providers: [],
  bootstrap: [ManageComponent]
})
export class ManageCourseRoutingModule { }
