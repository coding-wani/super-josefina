import { MainArea, SecondaryArea } from "@/components/layout/Content";
import MainActionsMenu from "./components/ContentMainHeader/MainActionsMenu/MainActionsMenu";
import FilterOptions from "./components/ContentMainHeader/FilterOptions/FilterOptions";
import SortOptions from "./components/ContentMainHeader/SortOptions/SortOptions";
import Breadcrumbs from "./components/ContentSecondaryHeader/Breadcrumbs/Breadcrumbs";
import SecondaryActionsMenu from "./components/ContentSecondaryHeader/SecondaryActionsMenu/SecondaryActionMenu";
import FavouriteSwitcher from "./components/ContentSecondaryHeader/FavouriteSwitcher/FavouriteSwitcher";
import SubscriptionSwitcher from "./components/ContentSecondaryHeader/SubscriptionSwitcher/SubscriptionSwitcher";
import SnoozeOptions from "./components/ContentSecondaryHeader/SnoozeOptions/SnoozeOptions";
import DeleteNotificationAction from "./components/ContentSecondaryHeader/DeleteNotificationAction/DeleteNotificationAction";
import IssueContent from "./components/ContentMainBody/IssueContent/IssueContent";
import ContextPanel from "./components/ContentMainBody/ContextPanel/ContextPanel";
import ReminderOptions from "./components/ContentSecondaryHeader/ReminderOptions/ReminderOptions";
import InboxNotificationsList from "./components/ContentMainBody/InboxNotificationsList/InboxNotificationsList";

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
