import { Component, Input } from '@angular/core';
import { EmailListItem } from './email-list.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'fd-email-list-item',
  imports: [RouterLink],
  templateUrl: './email-list-item.component.html',
  styleUrl: './email-list-item.component.scss',
})
export class EmailListItemComponent {
  @Input() emailListItem!: EmailListItem;
}
