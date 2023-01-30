import { Component, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RoutesRecognized } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreadcrumbNavService } from './breadcrumb-nav.service';

@Component({
  selector: 'app-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.css'],
  providers: [BreadcrumbNavService],
})
export class BreadcrumbNavComponent {

  constructor(public service: BreadcrumbNavService) { }
}