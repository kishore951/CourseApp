import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor( private myapi:ApiService) { }

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  status:boolean=false
  readValues=()=>{
    let data={
   "courseTitle":this.courseTitle,
   "courseDescription":this.courseDescription,
   "courseDuration":this.courseDuration,
   "courseDate":this.courseDate,
   "courseVenue":this.courseVenue
    }
    console.log(data)
    this.myapi.addCourse(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")

        this.courseTitle=""
        this.courseDescription=""
        this.courseDuration=""
        this.courseDate=""
        this.courseVenue=""

        this.status=true
      }
    )
  }

  ngOnInit(): void {
  }

}
