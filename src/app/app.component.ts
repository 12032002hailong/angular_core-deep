import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-core-deep';


  onLogoClicked() {
    console.log("hello");
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }
}
