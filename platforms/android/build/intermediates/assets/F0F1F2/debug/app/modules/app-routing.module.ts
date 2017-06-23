import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Login } from './login/login.component';
import { Account} from './account/account.component';
import { Supplier } from './supplier/supplier.component';
import { VSupplier } from './vsupplier/vsupplier.component';
import { Settings } from './settings/settings.component';
@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: Login },
      { path: 'account', component: Account },
      { path: 'supplier', component: Supplier},
      { path: 'vsupplier', component: VSupplier },
      { path: 'settings', component: Settings }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
