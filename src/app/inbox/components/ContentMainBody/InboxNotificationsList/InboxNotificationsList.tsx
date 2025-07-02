import InboxNotification from "./InboxNotification/InboxNotification";

export default function InboxNotificationsList() {
  return (
    <ul className="flex flex-col gap-2" aria-label="Inbox notifications">
      <InboxNotification
        notificationTitle="ISSUE-03 Issue title 03"
        notificationDescription="Due date"
        notificationTime="2d"
      />
      <InboxNotification
        notificationTitle="ISSUE-02 Issue title 02"
        notificationDescription="Due date"
        notificationTime="1w"
      />
      <InboxNotification
        notificationTitle="ISSUE-01 Issue title 01"
        notificationDescription="Due date"
        notificationTime="3d"
      />
    </ul>
  );
}
