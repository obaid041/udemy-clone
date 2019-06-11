import { Injectable } from '@angular/core';

import { Course } from '../entities/course.entity';

@Injectable()
export class CourseService {

    private courses: Course[] ;

    constructor() {
       this.courses = [
            { id: 'c01', title: 'Java Programming Masterclass for Software Developers', author: 'Tim Buchalka and 2 others', price: '$29.99', photo: 'assets/img/course2.jpg' },
            { id: 'c02', title: 'Logo Design in Adobe Illustrator - The Advanced Level', author: ' Daniel Evans, Published, Award Winning Logo Designer. 19 Years Experience', price: '$19.99', photo: 'assets/img/course3.jpg' },
            { id: 'c03', title: 'Logo Design Basics and a Reallife Logo Project with AI', author : 'By Mehmet Emin Aykurt, Industrial Designer', price: '$12.99', photo: 'assets/img/course1.jpg' }
        ];
    }

    findAll(): Course[] {
        return this.courses;
    }

    find(id: string): Course {
        return this.courses[this.getSelectedIndex(id)];
    }
    

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}