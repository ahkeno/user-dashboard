import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { UserNavigationComponent } from './components/user-navigation/user-navigation.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataGraphComponent } from './components/data-graph/data-graph.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    UserNavigationComponent,
    DataTableComponent,
    DataGraphComponent,
    DashboardComponent,
    HomepageComponent,
    LoadingComponent,
    ErrorComponentComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
