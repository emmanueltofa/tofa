import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Label } from "ui/label";


@Component({
  selector: 'home',
  templateUrl: 'modules/home/home.component.html',
 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  public oneway = "SUPPLIERS REGISTERED";
  text: string = 'Home Page';

   constructor() {
       
    }
}
