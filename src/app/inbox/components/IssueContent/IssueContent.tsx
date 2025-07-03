import IssueReactions from "./IssueReactions/IssueReactions";
import AttachFileButton from "./AttachFileButton/AttachFileButton";
import IssueTitle from "./IssueTitle/IssueTitle";
import IssueDescription from "./IssueDescription/IssueDescription";

export default function IssueContent() {
  return (
    <div aria-label="Issue content" className="h-full px-4 flex-1">
      <IssueTitle />
      <IssueDescription />
      <div
        aria-label="Issue footer"
        className="flex items-center justify-between gap-2 pt-2.5 pb-4 px-1"
      >
        <IssueReactions />
        <AttachFileButton />
      </div>
    </div>
  );
}
