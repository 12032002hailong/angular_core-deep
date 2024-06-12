import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-image',
  standalone: true,
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl!: string;


  ngOnInit(): void {

  }
}
