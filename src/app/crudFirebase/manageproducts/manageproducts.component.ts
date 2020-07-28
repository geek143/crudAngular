import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2'
import { ProdutsService } from '../produts.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.scss']
})
export class ManageproductsComponent implements OnInit {

  @ViewChild('pid') pid:ElementRef;
  @ViewChild('name') name:ElementRef;
  @ViewChild('price') price:ElementRef;

  dataTilte = this._manageServices.getdataTitle();
  products = [];
    // {
    //   pid : "p1",
    //   name : "Laptop",
    //   price : 80000
    // },
    // {
    //   pid : "p2",
    //   name : "Machine",
    //   price : 11500
    // },
    // {
    //   pid : "p1",
    //   name : "Desktop",
    //   price : 15000
    // },{
    //   pid : "p1",
    //   name : "Tv",
    //   price : 45000
    // }

  loader : boolean = false;
  editMode : boolean = false;
  editIndex : number;
  constructor(
    private _manageServices: ProdutsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  addProduct(pid,name,price)
  {
    if(this.editMode)
    {
      this.products[this.editIndex] = {
        pid : pid.value,
        name : name.value,
        price : price.value
      }
     this.editMode = false;
    }
    else
    {
      this.products.push({
        pid : pid.value,
        name : name.value,
        price : price.value
     })
    }

  }

  saveProducts()
  {
    this._manageServices.saveData(this.products)
    .subscribe( (data) =>{
      console.log(data);
    });
  }

  editProducts(index)
  {
    this.editMode = true;
    this.editIndex = index;
    this.pid.nativeElement.value = this.products[index].pid;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }

  fetchProduct()
  {
     this.loader = true;
     this._manageServices.getData()
     .subscribe( (data) =>{
       const newdata = JSON.stringify(data)
       this.products = JSON.parse(newdata);
       this.loader = false;
     })
  }

  delProducts(item)
  {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.products.splice(item, 1);
        this.saveProducts();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
