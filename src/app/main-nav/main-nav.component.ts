import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  public links = [
    { route: '/', label: 'Dashboard', exact: true },
    { route: '/users', label: 'Users' },
    { route: '/projects', label: 'Projects' },
  ];

  constructor() { }

  ngOnInit() {
  }

}