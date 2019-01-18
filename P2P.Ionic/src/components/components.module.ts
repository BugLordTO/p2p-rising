import { NgModule } from '@angular/core';
import { AddressFormComponent } from './address-form/address-form';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AddressFormComponent],
	imports: [
		IonicModule.forRoot(AddressFormComponent)],
	exports: [AddressFormComponent]
})
export class ComponentsModule {}
