import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor( private http: HttpClient ) {}
  url = "http://localhost:3000/resturants";
  rootUrl = "http://localhost:3000/";

  getListing(): Observable<any>
  {
    return this.http.get(this.url);
  }

  addList(data) : Observable<any>
  {
    return this.http.post(this.url,data);
  }

  delList(id): Observable<any>
  {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateResto(id): Observable<any>
  {
    return this.http.get(`${this.url}/${id}`);
  }

  newUpateresto(id,data): Observable<any>
  {
    return this.http.put(`${this.url}/${id}`,data);
  }

  addUser(id): Observable<any>
  {
    return this.http.post(`${this.rootUrl}users`,id);
  }
}
