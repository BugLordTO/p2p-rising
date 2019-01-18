import { Component, Input } from '@angular/core';
import { Address, ApiServiceProvider } from '../../providers/api-service/api-service';
import { ManaApiServiceProvider } from '../../providers/mana-api-service/mana-api-service';

@Component({
  selector: 'address-form',
  templateUrl: 'address-form.html'
})
export class AddressFormComponent {

  @Input() public addressInfo: Address = new Address();
  constructor(private old_svc: ApiServiceProvider,
    private svc: ManaApiServiceProvider) {
  }
 
  saveAddress() {
    this.svc.saveProfileAddress(this.addressInfo);
  }
 
}
