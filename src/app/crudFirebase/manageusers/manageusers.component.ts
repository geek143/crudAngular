import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageusersService } from './manageusers.service';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  dataTilte = "Ux Users";
  @ViewChild('userForm') userForm:NgForm;

  users = [
    // {
    //    name : "Lucky",
    //    technology : "Angular"
    // },
    // {
    //   name : "Amit",
    //   technology : "Html,css"
    // }
  ]

  editMode : boolean = false;
  editUserId;
  constructor(private _users:ManageusersService) { }

  ngOnInit(): void {
    // this._users.getUsers()
    // .subscribe( (data) => {
    //   console.log(data)
    // })
    this.fetchUsers();
  }

  onSubmit(val)
  {
    if(this.userForm.valid)
    {
      if(this.editMode)
      {
          this._users.editUser(this.editUserId,val)
          .subscribe( (data) => {
            console.log(data);
            this.fetchUsers();
          })
      }
      else
      {
        this._users.addNewUsers(val)
        .subscribe( (data) => {
           this.users.push(val)
        })
      }
    }

    else
    {

    }


  }

  deleteUser(userId)
  {
    console.log(userId);
    this._users.delUser(userId)
    .subscribe( (data) => {
      this.fetchUsers();
    });

  }

  editUser(userId, index)
  {
    this.editMode = true;
    this.editUserId = userId;
    console.log(this.users[index].name);
    this.userForm.setValue({
      name : this.users[index].name,
      technology : this.users[index].technology
    })
    this.fetchUsers();
  }

  fetchUsers()
  {
    this._users.getUsers()
    .pipe(map( resdata => {
       const userArray = [];
       for(let key in resdata)
       {
          // console.log(key);
          // console.log(resdata[key]);\
          if(resdata.hasOwnProperty(key))
          {
            userArray.push({ userId : key, ...resdata[key]})
          }

       }
       return userArray;
    }))
    .subscribe( (data) =>{
      // console.log(data);
      this.users =data
    })
  }
}
