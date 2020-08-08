import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces
import {
  IUsers,
  IDetailUser
} from '../interfaces';


// Service http requests
@Injectable()
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  // get list users
  public getUsers(): Observable<IUsers> {
    return this.http.get<IUsers>(`users`);
  }

  // get detail user info
  public getUserDetail(id: string): Observable<IDetailUser> {
    return this.http.get<IDetailUser>(`users/${id}`);
  }

}
