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
import { UserService } from './share/user.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    UserNavigationComponent,
    DataTableComponent,
    DataGraphComponent,
    DashboardComponent,
    HomepageComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
