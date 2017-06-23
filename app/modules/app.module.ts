import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { DropDownModule } from 'nativescript-drop-down/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Login } from './login/login.component';
import { Account} from './account/account.component';
import { Supplier } from './supplier/supplier.component';
import { VSupplier } from './vsupplier/vsupplier.component';
import { Settings } from './settings/settings.component';


import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule, 
    DropDownModule 
],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Login,
    Settings,
    VSupplier,
    Supplier,
    Account
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
