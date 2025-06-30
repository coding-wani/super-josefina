import { MainArea, SecondaryArea } from "@/components/layout/Content";
import ActionsMenu from "./components/MainHeader/ActionsMenu/ActionsMenu";
import FilterOptions from "./components/MainHeader/FilterOptions/FilterOptions";
import SortOptions from "./components/MainHeader/SortOptions/SortOptions";

export default function InboxPage() {
  return (
    <>
      <MainArea
        pageTitle="Inbox"
        leftHeaderComponents={[<ActionsMenu key="actions" />]}
        rightHeaderComponents={[
          <FilterOptions key="filter" />,
          <SortOptions key="sort" />,
        ]}
      >
        Inbox main area content
      </MainArea>
      <SecondaryArea header="Inbox secondary area header" widthPreset="half">
        Inbox secondary area content
      </SecondaryArea>
    </>
  );
}
