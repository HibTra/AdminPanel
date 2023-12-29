import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  constructor(private fb: FormBuilder, public service: CoursesService){}

  addForm = this.fb.group(
    {
      title : ['', Validators.required],
      price : ['', Validators.required],
      image : ['', Validators.required],
    }
  )

  addNew(){
    if(this.addForm.valid){
      const courseData = this.addForm.value
      this.service.addCourse(courseData).subscribe(res => window.location.reload())
    }
    else
    alert('All fields are required !')
  }
}
