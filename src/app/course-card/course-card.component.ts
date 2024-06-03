import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  @Input()
  course!: Course;

  @Input({ required: true })
  index!: number;

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  ngOnInit(): void {

  }

  constructor() { }

  onCourseViewed() {
    console.log("card component");
    this.courseSelected.emit(this.course)
  }
}
