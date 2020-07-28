import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userId? : string,
  name : string,
  technology : string
}

@Injectable({
  providedIn: 'root'
})
export class ManageusersService {
  url = "https://learn-1-17e2a.firebaseio.com/users.json";

  constructor(
    private http:HttpClient
  ) { }

  addNewUsers(data : User) : Observable<any>
  {
    return this.http.post<User>(this.url,data)
  }

  getUsers() : Observable<any>
  {
    return this.http.get<User>(this.url)
  }

  delUser(userId)
  {
    return this.http.delete(`https://learn-1-17e2a.firebaseio.com/users/${userId}.json`);
  }

  editUser(userId,data)
  {
    return this.http.put(`https://learn-1-17e2a.firebaseio.com/users/${userId}.json`, data);
  }

}
