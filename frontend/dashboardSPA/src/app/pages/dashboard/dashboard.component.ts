import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './../../../assets/api-config/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  constructor(
    private httpClient: HttpClient
  ) { }
  api : any = API;
  chartData = []; 
  user: any;
  userGoal: any;
  documentList: any;
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string = "";
  isPersonal: boolean = false;

  ngOnInit(): void {
    // API call for onload
    this.loadUser();
    this.loadDocument();
  }
  loadUser(){
    this.isLoading = true;
    this.httpClient.get(this.api.urlUser).subscribe(dataUser => {
      this.user = dataUser;
      this.user = this.user.data;
      this.isLoading = false;
      // Call Career goal API
      this.isPersonal = this.user.current_organisation.is_personal;
      if(this.isPersonal){
        this.loadUserGoal();
      }
    },err => {
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = err;
    } );
  }
  loadUserGoal(){
    this.httpClient.get(this.api.urlUserCareer).subscribe(dataGoal => {
      this.userGoal = dataGoal;
      this.userGoal = this.userGoal.data;
      this.chartData = this.userGoal.progress;
    },err => {
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = err;
    });
  }
  loadDocument(){
    this.httpClient.get(this.api.urlDocument).subscribe(dataDocument => {
      this.documentList = dataDocument;
      this.documentList = this.documentList.data;
    },err => {
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = err;
    } );
  }
}
