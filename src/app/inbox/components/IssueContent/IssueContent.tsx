import { colors } from "@/lib/colors";
import { Heart, SmilePlus, ThumbsUp } from "lucide-react";

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
        className="flex items-center gap-2 pt-2.5 pb-4"
        aria-label="Reactions"
      >
        <div
          aria-label="Like reaction counter"
          className={`flex items-center gap-1 border py-1 px-2 rounded-xl ${colors.border.primary} ${colors.bg.primary} hover:${colors.bg.tertiary}`}
        >
          <ThumbsUp size={12} />
          <span className="text-sm font-medium">1</span>
        </div>

        <div
          aria-label="Heart reaction counter"
          className={`flex items-center gap-1 border py-1 px-2 rounded-xl ${colors.border.primary} ${colors.bg.primary} hover:${colors.bg.tertiary}`}
        >
          <Heart size={12} />
          <span className="text-sm font-medium">1</span>
        </div>

        <div className="px-1" aria-label="Add reaction button">
          <SmilePlus size={16} />
        </div>
      </div>
    </div>
  );
}
