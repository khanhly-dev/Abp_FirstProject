import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { CityComponent } from './city/city.component';
import { DistrictComponent } from './district/district.component';
import { FormViewComponent } from './form-view/form-view.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'city',
    component: CityComponent
  },
  {
    path: 'district',
    component: DistrictComponent
  },
  {
    path: 'form',
    component: FormComponent,
    data : {permission : 'Pages.Dashboard.CardCreate'},
    canActivate: [AppRouteGuard]
  },
  {
    path: 'form-view',
    component: FormViewComponent,
    data : {permission : 'Pages.Dashboard.CardView'},
    canActivate: [AppRouteGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
