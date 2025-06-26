import { MainArea, SecondaryArea } from "@/components/Content";

export default function InboxPage() {
  return (
    <>
      <MainArea header="Inbox main header">Inbox main content</MainArea>
      <SecondaryArea header="Inbox secondary header" widthPreset="half">
        inbox secondary content
      </SecondaryArea>
    </>
  );
}
