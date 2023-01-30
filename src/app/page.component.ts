import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-page',
  template: `<h1>Hello {{name}}!</h1> <pre>{{ activatedRoute.data | async | json }}</pre>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PageComponent  {

  constructor(public activatedRoute: ActivatedRoute) { }
  @Input() name: string;
}
