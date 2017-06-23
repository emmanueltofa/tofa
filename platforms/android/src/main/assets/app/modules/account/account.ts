import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'account',
  templateUrl: 'modules/account/account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  text: string = 'Account Page';
}