import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path : '',
    component: PageComponent,
    data: { breadcrumb: 'Dashboard' },  
  },
  {
    path: 'users',
    data: { breadcrumb: 'Users' },
    children: [
      {
        path: '',
        component: PageComponent,
      },
      {
        path: 'create',
        component: PageComponent,
        data: { breadcrumb: 'New User' },
      },
    ]
  },
  {
    path: 'projects',
    component: PageComponent,
    data: { breadcrumb: 'Projects' },
    children: [
      { path: 'create', component: PageComponent, data: { breadcrumb: 'New Project' } },
      {
        path: ':id',
        component: PageComponent,
        children: [
          {
            path: 'deployed',
            component: PageComponent,
            data: { breadcrumb: 'Project Deployed' },
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
