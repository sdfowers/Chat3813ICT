import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http:HttpClient) {}

  isLoggedin() {
    if(sessionStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  login(email:string, pwd:string) {
    return this.http.post<User>('http://localhost:3000/api/auth', {email: email, upwd: pwd});
  }
  updateUser(user:User) {
    return this.http.post<User>('http://localhost:3000/api/updateuser', {user: user});
  }
  logout(event:any) {
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl('');
  }
  setCurrentUser(newuser:any) {
    sessionStorage.setItem('currentUser', JSON.stringify(newuser));
  }
  getCurrentUser() {
    return sessionStorage.getItem('currentUser');
  }
}
