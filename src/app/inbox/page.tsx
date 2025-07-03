import { MainArea, SecondaryArea } from "@/components/layout/Content";
import MainActionsMenu from "./components/InboxMainHeader/MainActionsMenu/MainActionsMenu";
import FilterOptions from "./components/InboxMainHeader/FilterOptions/FilterOptions";
import SortOptions from "./components/InboxMainHeader/SortOptions/SortOptions";
import Breadcrumbs from "./components/InboxSecondaryHeader/Breadcrumbs/Breadcrumbs";
import SecondaryActionsMenu from "./components/InboxSecondaryHeader/SecondaryActionsMenu/SecondaryActionMenu";
import FavouriteSwitcher from "./components/InboxSecondaryHeader/FavouriteSwitcher/FavouriteSwitcher";
import SubscriptionSwitcher from "./components/InboxSecondaryHeader/SubscriptionSwitcher/SubscriptionSwitcher";
import SnoozeOptions from "./components/InboxSecondaryHeader/SnoozeOptions/SnoozeOptions";
import DeleteNotificationAction from "./components/InboxSecondaryHeader/DeleteNotificationAction/DeleteNotificationAction";
import IssueContent from "./components/IssueContent/IssueContent";
import ContextPanel from "./components/ContextPanel/ContextPanel";
import ReminderOptions from "./components/InboxSecondaryHeader/ReminderOptions/ReminderOptions";
import InboxNotificationsList from "./components/InboxNotificationsList/InboxNotificationsList";

export default function InboxPage() {
  return (
    <>
      <MainArea
        pageTitle="Inbox"
        leftHeaderComponents={[<MainActionsMenu key="main-actions" />]}
        rightHeaderComponents={[
          <FilterOptions key="filter-options" />,
          <SortOptions key="sort-options" />,
        ]}
      >
        <InboxNotificationsList />
      </MainArea>
      <SecondaryArea
        widthPreset="double"
        leftHeaderComponents={[
          <Breadcrumbs key="breadcrumbs" />,
          <SecondaryActionsMenu key="secondary-actions" />,
          <FavouriteSwitcher key="favourite-switcher" />,
        ]}
        rightHeaderComponents={[
          <ReminderOptions key="reminder-options" />,
          <SubscriptionSwitcher key="subscription-switcher" />,
          <SnoozeOptions key="snooze-options" />,
          <DeleteNotificationAction key="delete-notification-action" />,
        ]}
      >
        <IssueContent />
        <ContextPanel />
      </SecondaryArea>
    </>
  );
}
