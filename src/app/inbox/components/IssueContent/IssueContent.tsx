import { colors } from "@/lib/colors";

export default function IssueContent() {
  return (
    <div className="h-full px-4 flex-1" aria-label="Issue content">
      <div
        className={`mt-8 mb-2 font-semibold text-xl ${colors.text.primary}`}
        aria-label="Issue title"
      >
        Issue title 4
      </div>
      <div
        className={`text-sm ${colors.text.primary}`}
        aria-label="Issue description"
      >
        Issue description
      </div>
    </div>
  );
}
