import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from './db-data';
import { Course } from './model/course';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent,
    NgIf, CourseImageComponent, NgTemplateOutlet,
    HighlightedDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  @ViewChild(HighlightedDirective, { read: HighlightedDirective })
  highlighted!: HighlightedDirective

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards!: QueryList<ElementRef>

  constructor() {

  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }

  ngAfterViewInit(): void {
    console.log(this.highlighted);

  }
  onCourseSelected(course: Course) {
  }




}
