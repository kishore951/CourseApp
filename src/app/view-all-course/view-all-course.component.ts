import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-course',
  templateUrl: './view-all-course.component.html',
  styleUrls: ['./view-all-course.component.css']
})
export class ViewAllCourseComponent implements OnInit {

  constructor( private myapi:ApiService) {
    this.fetchData()
   }

status:boolean=false
fetchData=()=>{
  this.myapi.courseData().subscribe(
    (data)=>{
      this.courseData=data
      this.status=true
    }
  )
}

  courseData:any=[]
  ngOnInit(): void {
  }

}
