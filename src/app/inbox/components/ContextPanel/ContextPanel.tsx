import { colors } from "@/lib/colors";

export default function ContextPanel() {
  return (
    <>
      <div className={`border-l ${colors.border.primary}`} />
      <div
        className="h-full p-4 w-60 flex flex-col gap-3"
        aria-label="Context panel"
      >
        <div aria-label="Issue properties">
          <span className={`text-xs font-medium ${colors.text.secondary}`}>
            Properties
          </span>
        </div>
        <div aria-label="Label assignments">
          <span className={`text-xs font-medium ${colors.text.secondary}`}>
            Labels
          </span>
        </div>
        <div aria-label="Project assignments">
          <span className={`text-xs font-medium ${colors.text.secondary}`}>
            Projects
          </span>
        </div>
        <div aria-label="Milestone assignment">
          <span className={`text-xs font-medium ${colors.text.secondary}`}>
            Milestone
          </span>
        </div>
        <div aria-label="Due date">
          <span className={`text-xs font-medium ${colors.text.secondary}`}>
            Due date
          </span>
        </div>
        <div aria-label="Related issue">
          <span className={`text-xs font-medium ${colors.text.secondary}`}>
            Related
          </span>
        </div>
      </div>
    </>
  );
}
