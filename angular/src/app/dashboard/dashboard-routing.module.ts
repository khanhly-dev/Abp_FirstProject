import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { DistrictComponent } from './district/district.component';
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
    component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
