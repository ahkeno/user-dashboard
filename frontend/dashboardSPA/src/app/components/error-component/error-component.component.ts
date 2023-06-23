import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent  {
  @Input() errorMessage: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
