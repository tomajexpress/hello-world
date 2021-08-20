import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isActive = true;
  
  CourseName = "Mathematic";

  constructor() { }

  ngOnInit(): void {
  }

}
