import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() showLoading: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }

}
