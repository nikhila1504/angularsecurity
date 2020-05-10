import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { DetailsComponent } from './details/details.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
//  { path: '', redirectTo: 'vendor', pathMatch: 'full' },
// {path: 'login', component: LoginComponent},
{path: '', component: LoginComponent},
{ path: 'vendors', component: VendorListComponent },
{ path: 'add', component: VendorFormComponent },
{ path: 'update/:id', component: VendorUpdateComponent },
{ path: 'details/:id', component:DetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
