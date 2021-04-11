import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DistrictServiceProxy } from '@shared/service-proxies/service-proxies';
import { District } from '../view_model/districtViewModel'

const provider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DistrictComponent),
  multi: true
};


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
  providers: [provider]
})
export class DistrictComponent implements OnInit, ControlValueAccessor {

  districtList : District[] = []

  districtSelected : string;

  districtId:number

  private _cityId: number;
 
    @Input() set cityId(value: number) {
       this._cityId = value;
      this.getDistrictByCityId(this._cityId);
    }
    get cityId(): number {
        return this._cityId;
    }

  constructor(private districtService : DistrictServiceProxy) { }
 
  ngOnInit(): void {
    this.getAllDistrict();
  }

  getAllDistrict():void
  {
    this.districtService.getAllDistrict().subscribe(
      districts => this.districtList = districts
    )
  }

  getDistrictByCityId(cityId : number)
  {
    this.districtService.getDistrictByCityId(cityId).subscribe(x => this.districtList = x)
  }

  onCitySelected(event: any) {
    this.districtSelected = event.target.value;
    for (let i of this.districtList) {
      if (i.name === this.districtSelected) {
        this.districtId = i.id;
      }
    }
    this.onChange(this.districtSelected)
    this.onTouched()
  }

  onChange = (value : string) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.districtSelected = obj
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
