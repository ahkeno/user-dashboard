import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './models/user';
import { environment } from '../../environments/environment';

@Injectable()

export class DashboardService {
    constructor(private http: HttpClient) { }
    private rootUrl = `${environment.MOCK}`;
    private urlUser = this.rootUrl + 'user';
    getAllUser():Observable<User>{
        return this.http.get<User>(this.urlUser).pipe(
            tap(userData => console.log(userData)),
             catchError((error:any) => {
        return throwError(error);
         }) 
        );
    }
}