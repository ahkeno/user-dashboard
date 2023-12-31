import { Component, OnInit, Input } from '@angular/core';
import { Router} from "@angular/router";
@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent implements OnInit {
  @Input() userInfo: any = [];
  @Input() userProfile: any = [];
  showDropDownContainer: boolean = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onClickUserDropDown(){
    // Show and Hide of Dropdown Container
    this.showDropDownContainer = !this.showDropDownContainer;
  }
  onClickLogout(){
    this.router.navigate(['home']);
  }
}
