import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CityServiceProxy } from '@shared/service-proxies/service-proxies';
import { City } from '../view_model/cityViewModel'

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CityComponent),
  multi: true
};

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [provider]
})
export class CityComponent implements OnInit, ControlValueAccessor {

  cityList : City[] = [];

  cityId: number;

  citySelected: string;

  constructor(private cityService : CityServiceProxy) { }
 

  ngOnInit(): void {
    this.getAllCity()
  }

  getAllCity() : void
  {
    this.cityService.getAllCity().subscribe(
      citys => this.cityList = citys
    )
  }

  onCitySelected(event: any) {
    this.citySelected = event.target.value;
    for (let i of this.cityList) {
      if (i.name === this.citySelected) {
        this.cityId = i.id;
      }
    }
    console.log(this.citySelected)
    this.onChange(this.citySelected)
    this.onTouched()
  }

  onChange = (value : string) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.citySelected = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
