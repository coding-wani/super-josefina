import { MainArea, SecondaryArea } from "@/components/layout/Content";
import MainActionsMenu from "./components/MainHeader/MainActionsMenu/MainActionsMenu";
import FilterOptions from "./components/MainHeader/FilterOptions/FilterOptions";
import SortOptions from "./components/MainHeader/SortOptions/SortOptions";
import Breadcrumbs from "./components/SecondaryHeader/Breadcrumbs/Breadcrumbs";
import SecondaryActionsMenu from "./components/SecondaryHeader/SecondaryActionsMenu/SecondaryActionMenu";
import FavouriteSwitcher from "./components/SecondaryHeader/FavouriteSwitcher/FavouriteSwitcher";
import SubscriptionSwitcher from "./components/SecondaryHeader/SubscriptionSwitcher/SubscriptionSwitcher";
import SnoozeOptions from "./components/SecondaryHeader/SnoozeOptions/SnoozeOptions";
import DeleteNotificationAction from "./components/SecondaryHeader/DeleteNotificationAction/DeleteNotificationAction";
import IssueContent from "./components/IssueContent/IssueContent";
import ContextPanel from "./components/ContextPanel/ContextPanel";

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
        Inbox main area content
      </MainArea>
      <SecondaryArea
        widthPreset="double"
        leftHeaderComponents={[
          <Breadcrumbs key="breadcrumbs" />,
          <SecondaryActionsMenu key="secondary-actions" />,
          <FavouriteSwitcher key="favourite-switcher" />,
        ]}
        rightHeaderComponents={[
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
