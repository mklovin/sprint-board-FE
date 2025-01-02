import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Import environment

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {} // Inject HttpClient

  signIn(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signin`, data);
  }

  signUp(data: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, data);
  }
}
