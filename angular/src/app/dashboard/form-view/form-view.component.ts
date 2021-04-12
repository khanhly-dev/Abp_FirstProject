import { Component, Input, OnInit } from '@angular/core';
import { CardInfoServiceProxy, GetCardDto, UpdateCardDto } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  constructor( private cardService : CardInfoServiceProxy) { }

  ngOnInit(): void {
    this.getAllCard();
  }

  cardList : GetCardDto[] = [];

  private _readonly = true;
  @Input()
  get readonly() {
    return this._readonly;
  }
  set readonly(v: any) {
    if (v === false || v === 'false') {
      this._readonly = false;
    } else {
      this._readonly = true;
    }

  }

  getAllCard():void
  {
    this.cardService.getAllCardInfo().subscribe(x => this.cardList =x)
  }

  editData()
  {
    this.readonly = !this.readonly
  }

  saveCardBeforeUpdate(card : UpdateCardDto)
  {
    this.cardService.updateCard(card).subscribe();
    this.editData()
  }

  deleteCard(id : number)
  {
    this.cardService.deleteCard(id).subscribe();
    location.reload();
  }
}
