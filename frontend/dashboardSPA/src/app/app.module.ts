import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataGraphComponent } from './components/data-graph/data-graph.component';
import { DataContainerComponent } from './components/data-container/data-container.component';
import { DataBoxComponent } from './components/data-box/data-box.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataHeaderComponent } from './components/data-header/data-header.component';
import { DataChartComponent } from './components/data-chart/data-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    UserNavigationComponent,
    DataTableComponent,
    DataGraphComponent,
    DataContainerComponent,
    DataBoxComponent,
    DashboardComponent,
    DataHeaderComponent,
    DataChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
