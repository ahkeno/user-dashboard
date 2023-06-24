import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './../../../assets/api-config/api';
import {validateUser,validateDocument,validateCareer} from './../../share/validation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userTypeValidate = validateUser;
  documentTypeValidate = validateDocument;
  careerTypeValidate = validateCareer;

  constructor(
    private httpClient: HttpClient
  ) { }
  api : any = API;
  chartData = []; 
  user: any;
  userGoal: any;
  documentList: any;
  errorMessage: any;

  isLoading: boolean = false;
  isError: boolean = false;
  isPersonal: boolean = false;
  isValidatUsereData: boolean = true;
  isValidateDocumentData: boolean = true;
  isValidateCareerData: boolean = true;

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
      this.isValidatUsereData  = this.userTypeValidate(this.user);
      if(this.isValidatUsereData){
        // User Validation correct 
        this.isLoading = false;
        // Call Career goal API
        this.isPersonal = !this.user.current_organisation.is_personal;
        if(this.isPersonal){
          this.loadUserGoal();
        }
      }else{
        // Error in data type
        this.isError = true;
        this.errorMessage = { message: "Error in User: Data type"};
      }
    },err => {
      // Error in HTTP, API
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = err;
    } );
  }
  loadUserGoal(){
    this.httpClient.get(this.api.urlUserCareer).subscribe(dataGoal => {
      this.userGoal = dataGoal;
      this.userGoal = this.userGoal.data;
      this.isValidateCareerData  = this.careerTypeValidate(this.userGoal);
      if(this.isValidateCareerData){
        // Career Validation correct  
        this.chartData = this.userGoal.progress;
      }else{
        // Error in data type
        this.isError = true;
        this.errorMessage = { message: "Error in Career: Data type"};
      }
     
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
      this.isValidateDocumentData  = this.documentTypeValidate(this.documentList);
      if(!this.isValidateDocumentData){
        // Error in data type
        this.isError = true;
        this.errorMessage = { message: "Error in Document: Data type"};
      }
    },err => {
      this.isError = true;
      this.isLoading = false;
      this.errorMessage = err;
    } );
  }
}
