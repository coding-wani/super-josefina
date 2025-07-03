import { colors } from "@/lib/colors";
import IssueCopyButtons from "./IssueCopyButtons/IssueCopyButtons";

export default function IssueProperties() {
  return (
    <div aria-label="Issue properties" className="flex flex-col gap-2">
      <div
        aria-label="Issue properties header"
        className="flex items-center justify-between"
      >
        <span className={`text-xs font-medium ${colors.text.secondary}`}>
          Properties
        </span>
        <IssueCopyButtons />
      </div>
    </div>
  );
}
