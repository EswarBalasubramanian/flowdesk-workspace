import { EmailListComponent } from './../../../components/email-list/email-list.component';
import { Component } from '@angular/core';

@Component({
  imports: [EmailListComponent],
  selector: 'fd-emailClient-entry',
  template: `
    <fd-email-list></fd-email-list>
  `,
})
export class RemoteEntry {}
