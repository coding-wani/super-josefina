import IssueReactions from "./IssueReactions/IssueReactions";
import AttachFileButton from "./AttachFileButton/AttachFileButton";
import IssueTitle from "./IssueTitle/IssueTitle";
import IssueDescription from "./IssueDescription/IssueDescription";
import IssueSubIssues from "./IssueSubIssues/IssueSubIssues";
import IssueActivity from "./IssueActivity/IssueActivity";
import IssueLinks from "./IssueLinks/IssueLinks";
import CommentComposer from "./CommentComposer/CommentComposer";

export default function IssueContent() {
  return (
    <div
      aria-label="Issue content"
      className="h-full px-4 flex-1 overflow-y-auto pt-8 pb-14"
    >
      <IssueTitle />
      <IssueDescription />
      <div
        aria-label="Issue footer"
        className="flex items-center justify-between gap-2 pt-2.5 pb-1 px-1"
      >
        <IssueReactions />
        <AttachFileButton />
      </div>

      <div aria-label="Issue related content" className="flex flex-col gap-1">
        <IssueSubIssues />
        <IssueLinks />
        <IssueActivity />
        <CommentComposer />
      </div>
    </div>
  );
}
