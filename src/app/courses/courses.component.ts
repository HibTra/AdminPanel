import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { faList, faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  faList=faList
  faPen=faPen
  faTrash=faTrash
  faPlus=faPlus
  courses! : any[]
  selectedCourse: any

  constructor(public service: CoursesService){}

  ngOnInit(): void {
    this.service.getCourses().subscribe(res => this.courses=res)
    }

    openDialog(course: any){
      this.selectedCourse = course
    }
  
    deleteCourse(course: any){
      this.service.deleteCourse(course.id).subscribe(res => {
        this.courses=res
        this.ngOnInit()
      })
    }
}
