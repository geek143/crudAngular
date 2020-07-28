import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restoupdate',
  templateUrl: './restoupdate.component.html',
  styleUrls: ['./restoupdate.component.scss']
})
export class RestoupdateComponent implements OnInit {

  editRestoList = new FormGroup ({
    name : new FormControl(null,Validators.required),
    address : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email])
  })

  selected;

  constructor(
    private _resto:RestoService,
    private _activatedToute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._resto.updateResto(this._activatedToute.snapshot.params.id)
    .subscribe( (data) => {
        this.editRestoList = new FormGroup ({
          name : new FormControl(data['name']),
          address : new FormControl(data['address']),
          email : new FormControl(data['email'])
        })
    })
  }

  onSubmit()
  {
     console.log(this.editRestoList.value)
     this._resto.newUpateresto(this._activatedToute.snapshot.params.id,this.editRestoList.value)
     .subscribe( (data) =>{
       console.log(data);
       this.router.navigate(['/listresto']);
     })

  }

}
