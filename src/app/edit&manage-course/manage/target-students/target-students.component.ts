import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target-students',
  templateUrl: './target-students.component.html',
  styleUrls: ['./target-students.component.css']
})
export class TargetStudentsComponent implements OnInit {

  aboutCourse: string;
  course_prerequisites: string;
  target_students: string;

  dataArray=[];
  data_course_prerequisites=[];
  data_target_students=[];
  constructor() { }

  ngOnInit() {
    this.dataArray.push(this.aboutCourse);
    this.data_course_prerequisites.push(this.course_prerequisites);
    this.data_target_students.push(this.target_students);

  }

  addForm(){
    this.dataArray.push(this.aboutCourse);
  }

  addForm1(){
    this.data_course_prerequisites.push(this.course_prerequisites);
  }

  addForm2(){
    this.data_target_students.push(this.target_students);
  }

}
