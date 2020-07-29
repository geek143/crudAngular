import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestoModule } from "./crudJson/resto.module";
import { ManageproductsComponent } from './crudFirebase/manageproducts/manageproducts.component';
import { ProdutsService } from './crudFirebase/produts.service';
import { ManageusersComponent } from './crudFirebase/manageusers/manageusers.component';
import { ManageusersService } from './crudFirebase/manageusers/manageusers.service';
import { HeaderComponent } from './project/header/header.component';
import { BannerComponent } from './project/banner/banner.component';
import { HomepageComponent } from './project/homepage/homepage.component';
import { FooterComponent } from './project/footer/footer.component';
import { Ng5SliderModule } from 'ng5-slider';
import { SpecialofferComponent } from './project/specialoffer/specialoffer.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageproductsComponent,
    ManageusersComponent,
    HeaderComponent,
    BannerComponent,
    HomepageComponent,
    FooterComponent,
    SpecialofferComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RestoModule,
    Ng5SliderModule,
    AppRoutingModule
  ],
  providers: [ProdutsService, ManageusersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
