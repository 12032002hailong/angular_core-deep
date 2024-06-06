import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course!: Course;

  @Input()
  noImageTpl!: TemplateRef<any>

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  images!: QueryList<CourseCardComponent>;


  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
  }

  constructor() { }

  ngAfterViewInit(): void {

  }
  onCourseViewed() {
    this.courseSelected.emit(this.course)
  }
}
