import { Component, Input } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {

  @Input() course: any

  constructor(public service: CoursesService){}

}
