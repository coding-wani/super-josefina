import { colors } from "@/lib/colors";
import { Calendar, CircleDashed } from "lucide-react";

export interface InboxNotificationProps {
  notificationTitle: string;
  notificationDescription: string;
  notificationTime: string;
  notificationId: string;
  isUnread?: boolean;
}

export default function InboxNotification({
  notificationTitle,
  notificationDescription,
  notificationTime,
  notificationId,
  isUnread = false,
}: InboxNotificationProps) {
  return (
    <li
      className="hover:bg-neutral-50 rounded-sm h-14 px-2.5 flex items-center"
      aria-label={`Inbox notification: ${notificationTitle}`}
      role="listitem"
      id={notificationId}
    >
      <div
        aria-label="Notification Details"
        className="flex items-center gap-2.5 flex-1"
      >
        <div
          className={`bg-neutral-100 border ${colors.border.primary} p-2.5 rounded-full`}
          aria-label="Notification Icon"
        >
          <Calendar size={14} className={colors.icon.primary} />
        </div>

        <div className="flex flex-col" aria-label="Notification Details">
          <div className="flex items-center gap-1.5 leading-none" aria-label="Unread marker and title">
            {isUnread && (
              <div className={`size-2 rounded-full ${colors.bg.notification}`} aria-label="Unread marker" />
            )}
            <span
              className={`text-sm ${isUnread ? `${colors.text.primary} font-medium` : colors.text.secondary}`}
              aria-label="Notification title"
            >
              {notificationTitle}
            </span>
          </div>

          <span
            className={`${colors.text.secondary} text-xs`}
            aria-label="Notification description"
          >
            {notificationDescription}
          </span>
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-1"
        aria-label="Notification Meta"
      >
        <CircleDashed size={14} className={colors.icon.secondary} />
        <span
          className={`${colors.text.secondary} text-xs`}
          aria-label="Notification time"
        >
          {notificationTime}
        </span>
      </div>
    </li>
  );
}
