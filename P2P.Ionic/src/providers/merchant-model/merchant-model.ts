import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MerchantModelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MerchantResponse {
  merchant: Merchant;
  memberCount: number;
}

export class Merchant {
  _id:string;
  logo:string;
  name:string;
}