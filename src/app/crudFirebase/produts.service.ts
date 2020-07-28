import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

  constructor(
    private http: HttpClient
  ) { }

  url = "https://learn-1-17e2a.firebaseio.com/products.json";
  dataTitle = "https://learn-1-17e2a.firebaseio.com/dataTitle.json";
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  saveData(data : any[])
  {
    return this.http.put(this.url, data, {headers : this.headers});
  }

  getData()
  {
    return this.http.get(this.url);
  }

  getdataTitle()
  {
    return this.http.get(this.dataTitle);
  }

  // delData(id)
  // {
  //    return this.http.delete(this.url,id);
  // }
}
