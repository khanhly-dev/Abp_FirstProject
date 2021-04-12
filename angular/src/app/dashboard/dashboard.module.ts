import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CityComponent } from './city/city.component';
import { DistrictComponent } from './district/district.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormViewComponent } from './form-view/form-view.component';


@NgModule({
  declarations: [
    CityComponent,
    DistrictComponent,
    FormComponent,
    FormViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
