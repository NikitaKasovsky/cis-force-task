import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Service http requests
@Injectable()
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  // get list users
  public getUsers(): Observable<any> {
    return this.http.get(`users`);
  }

}
