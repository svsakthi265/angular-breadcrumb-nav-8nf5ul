import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public navLinks = [
    { route: '/', label: 'Dashboard', exact: true },
    { route: '/users', label: 'Users' },
    { route: '/projects', label: 'Projects' },
  ];
}
