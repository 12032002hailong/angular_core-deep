import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course!: Course;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, { read: ElementRef })
  image!: ElementRef;


  ngOnInit(): void {

  }

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.image);

  }
  onCourseViewed() {
    this.courseSelected.emit(this.course)
  }
}
