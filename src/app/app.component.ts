import { Component, Inject } from '@angular/core';
import { ROUTES } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(ROUTES) routes: any
  ){
    console.log(routes);
  }
}
