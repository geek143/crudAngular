import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RestoaddComponent } from './restoadd/restoadd.component';

import { RestoupdateComponent } from './restoupdate/restoupdate.component';
import { RestolistsComponent } from './restolists/restolists.component';
import { RestoregisterComponent } from './restoregister/restoregister.component';
import { RestorloginComponent } from './restorlogin/restorlogin.component';
import { RestoRoutingModule } from './resto-routing.module';
import { RestoService } from './resto.service';
import {NgxPaginationModule} from 'ngx-pagination'; //
import { OrderModule } from 'ngx-order-pipe';
import { Crud1headerComponent } from './crud1header/crud1header.component';

@NgModule({
  declarations: [
    RestoaddComponent,
    RestoupdateComponent,
    RestolistsComponent,
    RestoregisterComponent,
    RestorloginComponent,
    Crud1headerComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    OrderModule,
    RestoRoutingModule,
    ReactiveFormsModule
  ],
  providers : [RestoService],
  exports : [
    Crud1headerComponent
  ]
})
export class RestoModule { }
