export interface EmailListItem {
  id: string;
  userName: string;
  avatarUrl: string;
  lastMessageTime: string;
  unreadCount?: number;
  isStarred?: boolean;
  isSelected?: boolean;
}
