import { colors } from "@/lib/colors";
import IssueProperties from "./IssueProperties/IssueProperties";
import LabelAssignments from "./LabelAssignments/LabelAssignments";
import ProjectAssignments from "./ProjectAssignments/ProjectAssignments";
import MilestoneAssignment from "./MilestoneAssignment/MilestoneAssignment";
import DueDate from "./DueDate/DueDate";
import RelatedIssue from "./RelatedIssue/RelatedIssue";

export default function ContextPanel() {
  return (
    <>
      <div className={`border-l ${colors.border.primary}`} />
      <div
        className="h-full p-4 w-60 flex flex-col gap-3"
        aria-label="Context panel"
      >
        <IssueProperties />
        <LabelAssignments />
        <ProjectAssignments />
        <MilestoneAssignment />
        <DueDate />
        <RelatedIssue />
      </div>
    </>
  );
}
