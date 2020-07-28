import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-restolists',
  templateUrl: './restolists.component.html',
  styleUrls: ['./restolists.component.scss']
})
export class RestolistsComponent implements OnInit {

  dataTitle = "List Of Resturants";
  collection = [];
  errors;
  page: number = 1;
  loader : boolean = true;
  constructor(
    private _resto: RestoService
  ) { }

  ngOnInit(): void {
    this._resto.getListing()
    .subscribe( (data) => {
      this.collection = data;
      this.loader = false;
    },error => {
      this.errors = error;
    })
  }

  delListing(item)
  {
     this.collection.splice(item -1, 1);
     this._resto.delList(item)
     .subscribe( (data) => {

       console.log(data);
     });
  }

}
