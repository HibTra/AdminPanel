import { Component, Input } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
  @Input() course: any
constructor(public service: CoursesService, private fb: FormBuilder){}

addForm = this.fb.group(
  {
    title : ['', Validators.required],
    price : ['', Validators.required],
    image : ['', Validators.required],
  }
)

updateCourse(){
  if(this.addForm.valid){
    const data = this.addForm.value
    this.service.updateCourse(this.course.id, data).subscribe(res => window.location.reload())
  }else
  alert("All fields are required !")
}
}
