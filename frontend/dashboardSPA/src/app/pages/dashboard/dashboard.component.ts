import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable, of ,Subject,interval} from 'rxjs';
import { distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

import { UserService } from './../../share/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isPersonal: boolean = false;
  constructor(
    private userService: UserService,
    private router : Router,
    private route: ActivatedRoute
  ) { }
  chartData = []; // TODO  change back any after api call
  user: any;
  userGoal: any;
  ngOnInit(): void {
    // API call
    this.loadUser();
  }
  loadUser(){
    this.userService.getUser().subscribe(dataUser => {
      console.log("COme to service call", dataUser);
      this.user = dataUser;
      // Call Career goal API
      this.isPersonal = this.user.data.current_organisation.is_personal;
      if(this.isPersonal){
        this.loadUserGoal();
      }
    },err => {
      console.log(err);
  } );
  }
  loadUserGoal(){
    this.userService.getUserCareer().subscribe(dataGoal => {
      this.userGoal = dataGoal;
      this.chartData = this.userGoal.data.progress;
    } );
  }
}
