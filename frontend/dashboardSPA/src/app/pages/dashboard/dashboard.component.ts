import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private urlUser = `${environment.MOCK}` +'user';
  private urlUserCareer = `${environment.MOCK}` +'career';
  private urlDocument = `${environment.MOCK}` +'document';

  isPersonal: boolean = false;
  constructor(
    private httpClient: HttpClient
  ) { }
  chartData = []; 
  user: any;
  userGoal: any;
  documentList: any;
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: string;
  ngOnInit(): void {
    // API call for onload
    this.loadUser();
    this.loadDocument();
  }
  loadUser(){
    this.isLoading = true;
    this.httpClient.get(this.urlUser).subscribe(dataUser => {
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
      console.log(err);
    } );
  }
  loadUserGoal(){
    this.httpClient.get(this.urlUserCareer).subscribe(dataGoal => {
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
    this.httpClient.get(this.urlDocument).subscribe(dataDocument => {
      this.documentList = dataDocument;
      this.documentList = this.documentList.data;
    },err => {
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = err;
    } );
  }
}
