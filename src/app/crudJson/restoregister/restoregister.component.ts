import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-restoregister',
  templateUrl: './restoregister.component.html',
  styleUrls: ['./restoregister.component.scss']
})
export class RestoregisterComponent implements OnInit {

  registerUser = new FormGroup ({
    name : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email])
  })

  constructor(private _resto:RestoService) { }

  ngOnInit(): void {

  }

  onSubmit()
  {
    this._resto.addUser(this.registerUser.value)
    .subscribe( (data) =>{
      console.log(data)
    })
    this.registerUser.reset();
  }

}
