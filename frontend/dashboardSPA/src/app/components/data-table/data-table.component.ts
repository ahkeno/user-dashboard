import { Component, OnInit,Input } from '@angular/core';
import {userDocumentHeader} from '../../../assets/languages/en/user-document';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() documetData: any = [];
  
  constructor() { }
  headerTitles = userDocumentHeader;
  ngOnInit(): void {}
}
