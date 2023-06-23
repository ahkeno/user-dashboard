import { Component } from '@angular/core';
import { UserService } from './../../share/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isPersonal: boolean = false;
  constructor(
    private userService: UserService
  ) { }
  chartData = []; 
  user: any;
  userGoal: any;
  documentList: any;
  isLoading: boolean = false;
  ngOnInit(): void {
    // API call for onload
    this.loadUser();
    this.loadDocument()
  }
  loadUser(){
    this.isLoading = true;
    this.userService.getUser().subscribe(dataUser => {
      this.user = dataUser.data;
      this.isLoading = false;
      // Call Career goal API
      this.isPersonal = this.user.current_organisation.is_personal;
      if(this.isPersonal){
        this.loadUserGoal();

      }
    },err => {
      console.log(err);
  } );
  }
  loadUserGoal(){
    this.userService.getUserCareer().subscribe(dataGoal => {
      this.userGoal = dataGoal.data;
      this.chartData = this.userGoal.progress;
    } );
  }
  loadDocument(){
    this.userService.getDocument().subscribe(dataDocument => {
      this.documentList = dataDocument.data;
    } );
  }
}
