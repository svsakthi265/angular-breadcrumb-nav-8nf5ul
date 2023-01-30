import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbNavComponent } from './breadcrumb-nav.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbNavService } from './breadcrumb-nav.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [BreadcrumbNavComponent],
  exports: [BreadcrumbNavComponent],
  providers: [BreadcrumbNavService],
})
export class BreadcrumbNavModule { }