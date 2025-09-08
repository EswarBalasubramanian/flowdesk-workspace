import { EmailListItem } from './email-list-item/email-list.model';
import { EmailListItemComponent } from './email-list-item/email-list-item.component';
import { Component } from '@angular/core';

@Component({
  selector: 'fd-email-list',
  imports: [EmailListItemComponent],
  template: `
  <div class="item-list">
    @for (emailItem of emailItems; track emailItem.id) {
    <fd-email-list-item [emailListItem]="emailItem"></fd-email-list-item>
    } @empty {
    <div>No items available.</div>
    }
  </div>`,
  styleUrl: './email-list.component.scss',
})
export class EmailListComponent {
  protected emailItems: EmailListItem[] = [
    {
      id: "1",
      userName: 'Leo Vishnek',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop',
      lastMessageTime: '7:28 PM',
      unreadCount: 2,
      isStarred: false,
      isSelected: false
    }, {
      id: "2",
      userName: 'Jane Doe',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&auto=format&fit=crop',
      lastMessageTime: 'Yesterday',
      unreadCount: 0,
      isStarred: true,
      isSelected: true
    }, {
      id: "3",
      userName: 'Alex Smith',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-e695f6fdc17e?q=80&w=250&h=250&auto=format&fit=crop',
      lastMessageTime: '5:00 PM',
      unreadCount: 5,
      isStarred: true,
      isSelected: false
    }
  ];
}
