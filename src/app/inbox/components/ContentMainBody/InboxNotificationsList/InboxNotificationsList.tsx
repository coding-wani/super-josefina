import InboxNotification from "./InboxNotification/InboxNotification";

export default function InboxNotificationsList() {
  return (
    <ul
      className="flex flex-col gap-1"
      aria-label="Inbox notifications"
      role="list"
    >
      <InboxNotification
        notificationTitle="ISSUE-03 Issue title 3"
        notificationDescription="Due date"
        notificationTime="2d"
        notificationId="notification-issue-03"
      />
      <InboxNotification
        notificationTitle="ISSUE-02 Issue title 2"
        notificationDescription="Due date"
        notificationTime="1w"
        notificationId="notification-issue-02"
      />
      <InboxNotification
        notificationTitle="ISSUE-01 Issue title 1"
        notificationDescription="Due date"
        notificationTime="3d"
        notificationId="notification-issue-01"
      />
    </ul>
  );
}
