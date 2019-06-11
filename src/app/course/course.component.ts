import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../entities/course.entity';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private courses: Course[];
  private cartItems: Course[] = [];
  @Input() title : string;
  
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.findAll();
  }

  show(title: string) {
    this.title=title;
  }

  showCart(){
    window.location.replace('http://localhost:4200/cart'); 
  }

  load() {
    window.location.reload();
  }

  addCart(id: string){
    var item: Course = this.courseService.find(id);
    let index: number = -1; 
    var arr = JSON.parse(localStorage.getItem("cart"));
    for(var i=0; i<arr.length; i++){
      this.cartItems.push(arr[i]);
    }
    //alert(this.cartItems);
    if(this.cartItems.length > 0) {
      for(var i=0; i<this.cartItems.length; i++){
        if(item.id == this.cartItems[i].id) {
          index = i;
          alert("Course is already in your Cart");
          break;
        }
      }
      if(index == -1) {
        
        this.cartItems.push(item);
      }
    } else {
      this.cartItems.push(item);
    }  
    localStorage.setItem("cart", JSON.stringify(this.cartItems));

    //alert(localStorage.getItem("cart"));
  }
}
