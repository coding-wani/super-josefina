import { colors } from "@/lib/colors";
import IssueReactions from "./IssueReactions/IssueReactions";
import { Paperclip } from "lucide-react";

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
        className={`text-base pt-2.5 ${colors.text.primary}`}
        aria-label="Issue description"
      >
        Issue description
      </div>

      <div
        aria-label="Issue footer"
        className="flex items-center justify-between gap-2 pt-2.5 pb-4"
      >
        <IssueReactions />
        <div
          aria-label="Attach images, files or videos button"
          className={`flex items-center justify-center size-7.5 rounded-full hover:border ${colors.border.secondary} hover:${colors.bg.primary}`}
        >
          <Paperclip size={12} />
        </div>
      </div>
    </div>
  );
}
