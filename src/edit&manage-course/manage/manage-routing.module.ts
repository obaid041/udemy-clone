import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseStructureComponent } from '../../edit&manage-course/manage/course-structure/course-structure.component';
import { CurriculumComponent } from '../../edit&manage-course/manage/curriculum/curriculum.component';
import { FilmEditComponent } from '../../edit&manage-course/manage/film-edit/film-edit.component';
import { SetupTestVideoComponent } from '../../edit&manage-course/manage/setup-test-video/setup-test-video.component';
import { TargetStudentsComponent } from '../../edit&manage-course/manage/target-students/target-students.component';
import { CaptionsComponent } from '../../edit&manage-course/manage/captions/captions.component';

const routes: Routes = [
    {
    path:'course',
    component:CourseStructureComponent
    },

    {
      path:'curriculum',
      component:CurriculumComponent
      },


      {
      path:'captions',
      component:CaptionsComponent
      },


      {
        path:'setup',
        component: SetupTestVideoComponent
        },

        {
          path:'film',
          component:FilmEditComponent
          },


          {
            path:'goals',
            component:TargetStudentsComponent
            },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
