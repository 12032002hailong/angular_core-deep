import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course;



  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {

  }

  constructor() { }

  onCourseViewed() {
    this.courseSelected.emit(this.course)
  }
}
