import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Group } from '../group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private router:Router, private http:HttpClient) {}

  createGroup(group:Group) {
    return this.http.post<Group>('http://localhost:3000/api/creategroup', {group: group});
  }

  updateGroup(group:Group) {
    //need to send group somehow
    return this.http.post<Group>('http://localhost:3000/api/updategroup', {group: group});
  }

  getAllGroups() {
    return this.http.get<string>('http://localhost:3000/api/getgroups', {});
  }

  setCurrentGroup(group:any) {
    sessionStorage.setItem('currentGroup', JSON.stringify(group));
  }
  getCurrentGroup() {
    return sessionStorage.getItem('currentGroup');
  }
}
