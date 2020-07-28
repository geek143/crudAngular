import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestoaddComponent } from './restoadd/restoadd.component';
import { RestoupdateComponent } from './restoupdate/restoupdate.component';
import { RestolistsComponent } from './restolists/restolists.component';
import { RestorloginComponent } from './restorlogin/restorlogin.component';
import { RestoregisterComponent } from './restoregister/restoregister.component';

const routes: Routes = [
  { path : "", redirectTo : "", pathMatch :"full" },
  { path:"addresto", component : RestoaddComponent },
  { path:"updateresto/:id", component : RestoupdateComponent },
  { path:"listresto", component : RestolistsComponent },
  { path:"logindresto", component : RestorloginComponent },
  { path:"regresto", component : RestoregisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestoRoutingModule { }
