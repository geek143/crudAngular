import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-restoadd',
  templateUrl: './restoadd.component.html',
  styleUrls: ['./restoadd.component.scss']
})
export class RestoaddComponent implements OnInit {

  addRestoList = new FormGroup ({
    name : new FormControl(null,Validators.required),
    address : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email])
  })

  submitted : boolean = false;

  constructor( private _resto:RestoService ) { }

  ngOnInit(): void {

  }

  onSubmit()
  {
    this._resto.addList(this.addRestoList.value)
    .subscribe( (data) =>{
      console.log(data);
      this.submitted = true;
    })
    this.addRestoList.reset();
  }

}
