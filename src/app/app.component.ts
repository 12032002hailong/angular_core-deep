import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  @ViewChild('cardRef', { read: ElementRef })
  card!: CourseCardComponent

  @ViewChild('courseImage')
  courseImage!: ElementRef;

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log("containerDiv", this.card);

    this.courses[0].description = 'test';


  }
  onCourseSelected(course: Course) {
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }


}
