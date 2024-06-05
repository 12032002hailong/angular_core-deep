import { AfterViewInit, Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './db-data';
import { Course } from './model/course';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];
  constructor() {

  }

  ngAfterViewInit(): void {

  }
  onCourseSelected(course: Course) {
  }




}
