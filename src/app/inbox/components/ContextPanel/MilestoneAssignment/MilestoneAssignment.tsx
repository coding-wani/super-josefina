import { colors } from "@/lib/colors";

export default function MilestoneAssignment() {
  return (
    <div aria-label="Milestone assignment">
      <span className={`text-xs font-medium ${colors.text.secondary}`}>
        Milestone
      </span>
    </div>
  );
}
