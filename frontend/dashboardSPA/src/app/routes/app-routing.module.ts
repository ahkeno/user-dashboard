import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './../pages/homepage/homepage.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
    path: 'home',
    component: HomepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
