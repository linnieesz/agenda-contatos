import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../payload/user-payload/user-payload.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl
 
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${this.url}/v1/users/`)
  }

  createUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`${this.url}/v1/users/`, user, { headers });
  }
  
}
