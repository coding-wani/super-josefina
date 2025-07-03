import { colors } from "@/lib/colors";

export default function LabelAssignments() {
  return (
    <div aria-label="Label assignments">
      <span className={`text-xs font-medium ${colors.text.secondary}`}>
        Labels
      </span>
    </div>
  );
}
