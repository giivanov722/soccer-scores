import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  private isAuthenticated = false;
  private timerToken: any;
  private userId: string;
  private username: string;

  private authListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getUserId(){
    return this.userId;
  }

  getUsername() {
    return this.username;
  }

  getAuthStatus() {
    return this.isAuthenticated;
  }

  getToken() {
    return this.token;
  }

  createUser(email: string, password: string, username: string) {
    const authData: AuthData = {
      email,
      password,
      username
    };
    this.http.post('http://localhost:3000/user/signup', authData)
    .subscribe(response => {
      console.log(response);
    });
  }

  login(email: string, password: string) {
    const authData: AuthData = {
      email,
      password,
      username: null
    };
    this.http.post<{token: string, expires: number, userId: string, username: string}>('http://localhost:3000/user/login', authData)
    .subscribe(response => {
      this.token = response.token;
      if (response.token) {
        const expiresIn = response.expires;
        this.setAuthTimer(expiresIn);
        this.isAuthenticated = true;
        this.authListener.next(true);
        this.userId = response.userId;
        this.username = response.username;
        const now = new Date();
        const expiration = new Date(now.getTime() + expiresIn * 1000);
        this.saveAuthData(response.token, expiration, this.userId, this.username);
        this.router.navigate(['/']);
      }
    });
  }

  autoAuthUser() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const now = new Date();
    const expires = authInfo.expiration.getTime() - now.getTime();
    if (expires > 0) {
      this.token = authInfo.token;
      this.isAuthenticated = true;
      this.userId = authInfo.userId;
      this.username = authInfo.username;
      this.setAuthTimer(expires / 1000);
      this.authListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authListener.next(false);
    this.router.navigate(['/']);
    clearTimeout(this.timerToken);
    this.clearAuthData();
    this.userId = null;
    this.username = null;
    this.router.navigate(['/']);
  }

  private saveAuthData(token: string, expire: Date, userId: string, username: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expire.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    if (!token || !expiration) {
      return;
    }
    return {
      token,
      expiration: new Date(expiration),
      userId,
      username
    }
  }

  private setAuthTimer(duration: number) {
    this.timerToken = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  getAuthListener(){
    return this.authListener.asObservable();
  }

}
