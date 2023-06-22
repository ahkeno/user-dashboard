import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataGraphComponent } from './components/data-graph/data-graph.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    UserNavigationComponent,
    DataTableComponent,
    DataGraphComponent,
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
