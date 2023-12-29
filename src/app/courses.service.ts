import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  showAddDialog= false

  showDetailDialog= false

  showUpdateDialog= false

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/Courses")
  }

  addCourse(courseData: any): Observable<any[]> {
    return this.http.post<any[]>("http://localhost:3000/Courses", courseData);
  }

  deleteCourse(id: number){
    return this.http.delete<any>(`http://localhost:3000/Courses/${id}`)
  }

  updateCourse(id: number, data: any){
     return this.http.put<any>(`http://localhost:3000/Courses/${id}`, data)
  }
}
