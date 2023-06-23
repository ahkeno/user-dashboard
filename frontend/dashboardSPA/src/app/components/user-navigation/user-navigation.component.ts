import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent implements OnInit {
  @Input() userInfo: any = [];
  @Input() userProfile: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
