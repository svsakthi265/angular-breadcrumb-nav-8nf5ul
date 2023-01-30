import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageComponent } from './page.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbNavModule } from './breadcrumb-nav/breadcrumb-nav.module';
import { MainNavModule } from './main-nav/main-nav.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MainNavModule,
    BreadcrumbNavModule,
  ],
  declarations: [ AppComponent, PageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
