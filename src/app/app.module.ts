import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestoModule } from "./crudJson/resto.module";
import { ManageproductsComponent } from './crudFirebase/manageproducts/manageproducts.component';
import { ProdutsService } from './crudFirebase/produts.service';
import { ManageusersComponent } from './crudFirebase/manageusers/manageusers.component';
import { FormsModule } from '@angular/forms';
import { ManageusersService } from './crudFirebase/manageusers/manageusers.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageproductsComponent,
    ManageusersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RestoModule,
    AppRoutingModule
  ],
  providers: [ProdutsService, ManageusersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
