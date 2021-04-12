import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardInfoServiceProxy, CityServiceProxy, CreateCardDto } from '@shared/service-proxies/service-proxies';
import { City } from '../view_model/cityViewModel';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private cityService : CityServiceProxy, private cardService : CardInfoServiceProxy) { }

  ngOnInit(): void {
    this.getAllCard();
    this.getAllCity();
  }

  public formInfo = new FormGroup(
    {
      name: new FormControl(''),
      phoneNumber: new FormControl(''),
      city: new FormControl(''),
      district: new FormControl('')
    }
  )

  cityList : City[] = [];

  getCityId : number = 1;

  getAllCity() : void 
  {
    this.cityService.getAllCity().subscribe( citys => this.cityList = citys)
  }

  onCityChange() :void 
  {
    for(let i of this.cityList)
    {
      if(this.formInfo.value.city === i.name)
      {
        this.getCityId = i.id
      }
    }
    console.log(this.getCityId)
  }

  cardList : CreateCardDto[] = [];

  getAllCard() : void
  {
    this.cardService.getAllCardInfo().subscribe(x => this.cardList = x)
  }

  createCard(cardInput : CreateCardDto)
  {
    cardInput.name = this.formInfo.value.name;
    cardInput.phoneNumber = this.formInfo.value.phoneNumber;
    cardInput.city = this.formInfo.value.city;
    cardInput.district = this.formInfo.value.district;
    this.cardService.createCard(cardInput).subscribe(user => { this.cardList.push(cardInput) });
    location.reload();
    alert("them thanh cong")
  }

}
