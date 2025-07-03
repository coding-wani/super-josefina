import IssueReactions from "./IssueReactions/IssueReactions";
import AttachFileButton from "./AttachFileButton/AttachFileButton";
import IssueTitle from "./IssueTitle/IssueTitle";
import IssueDescription from "./IssueDescription/IssueDescription";
import IssueSubIssues from "./IssueSubIssues/IssueSubIssues";
import IssueActivity from "./IssueActivity/IssueActivity";
import IssueLinks from "./IssueLinks/IssueLinks";
import CommentComposer from "./CommentComposer/CommentComposer";
import IssueComment from "./IssueComment/IssueComment";

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
      <IssueSubIssues />
      <IssueLinks />
      <IssueActivity />
      <IssueComment />
      <CommentComposer />
    </div>
  );
}
