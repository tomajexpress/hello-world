import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
@Component({
 selector : 'courses',
 template : `<h2>Courses</h2>
    <ul>
        <li style='color:green' *ngFor= "let item of courses">
            {{ item }}     
        </li>
    </ul>
 `,
})
export class CoursesComponent
{
    courses : string[];

    constructor(service: CoursesService)
    {
        this.courses = service.getCourses();
    }
    
}