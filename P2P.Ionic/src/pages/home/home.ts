import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private pageList:any = [];
  constructor(public navCtrl: NavController) {

    // Comment:
    // Add new page to below list, It will automatic generate item and navigate to page.
    // If you want to invisible home page, must comment or remove below list.
    this.pageList = 
    [
      { Name: "Membership shop p2p", PageName: "MembershipShopP2pPage"},
    ];
  }

  Navigate2Page(PageName: string){
    this.navCtrl.push(PageName);
  }
}
