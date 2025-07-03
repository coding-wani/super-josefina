import { colors } from "@/lib/colors";

export default function RelatedIssue() {
  return (
    <div aria-label="Related issue">
      <span className={`text-xs font-medium ${colors.text.secondary}`}>
        Related
      </span>
    </div>
  );
}
