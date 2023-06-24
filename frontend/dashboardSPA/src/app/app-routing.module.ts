import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiErrorsInterceptor } from '././share/api-errors.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorsInterceptor, multi: true }
  ],

})
export class AppRoutingModule {}


