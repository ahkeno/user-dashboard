import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {User} from './models/user';

@Injectable()

export class UserService {
    private rootUrl = `${environment.API_ROOT}`;
    private urlUser = `${environment.MOCK}` +'user';
    private urlUserCareer = `${environment.MOCK}` +'careerasda';
    private urlDocument = `${environment.MOCK}` +'document';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };
    constructor(private http: HttpClient) { }	
    getUser():Observable<any>{
        return this.http.get<any>(this.urlUser).pipe(
            tap(userData => console.log("getUser",userData)),
            catchError((error:any) => {
            return error;
        })
    );
    }
    getUserCareer():Observable<any>{
        return this.http.get<any>(this.urlUserCareer).pipe(
            tap(userData => console.log("get career",userData)),
            catchError((error:any) => {
            return error;
        })
    );
    }
    getDocument():Observable<any>{
        return this.http.get<any>(this.urlDocument).pipe(
            tap(userData => console.log("document",userData)),
            catchError((error:any) => {
            return error;
        })
    );
    }
}