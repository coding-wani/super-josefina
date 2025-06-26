import { MainArea, SecondaryArea } from "@/components/layout/Content";

export default function InboxPage() {
  return (
    <>
      <MainArea header="Inbox main area header">
        Inbox main area content
      </MainArea>
      <SecondaryArea header="Inbox secondary area header" widthPreset="half">
        Inbox secondary area content
      </SecondaryArea>
    </>
  );
}
