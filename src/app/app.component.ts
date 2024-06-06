import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './db-data';
import { Course } from './model/course';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, NgIf, CourseImageComponent, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards!: QueryList<ElementRef>

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log(this.cards);

  }
  onCourseSelected(course: Course) {
  }




}
