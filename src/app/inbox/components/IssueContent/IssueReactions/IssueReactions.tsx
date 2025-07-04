import { colors } from "@/lib/colors";
import { Heart, SmilePlus, ThumbsUp } from "lucide-react";

export default function IssueReactions() {
  return (
    <div className="flex items-center gap-2" aria-label="Issue Reactions">
      <div
        aria-label="Like reaction counter"
        className={`
          flex
          items-center
          gap-1
          border
          py-1
          px-2
          rounded-xl
          ${colors.border.primary}
          ${colors.bg.primary}
          hover:${colors.bg.tertiary}
          ${colors.icon.secondary} 
          ${colors.icon.groupHover} 
          hover:${colors.icon.active}`}
      >
        <ThumbsUp size={12} />
        <span className="text-sm font-medium">1</span>
      </div>

      <div
        aria-label="Heart reaction counter"
        className={`
          flex
          items-center
          gap-1
          border
          py-1
          px-2
          rounded-xl
          ${colors.border.primary}
          ${colors.bg.primary}
          hover:${colors.bg.tertiary}
          ${colors.icon.secondary} 
          ${colors.icon.groupHover} 
          hover:${colors.icon.active}`}
      >
        <Heart size={12} />
        <span className="text-sm font-medium">1</span>
      </div>

      <div
        className={`
          flex
          items-center
          justify-center
          size-7.5
          rounded-full
          hover:border
          ${colors.border.secondary}
          hover:${colors.bg.primary} 
          ${colors.icon.secondary} 
          ${colors.icon.groupHover} 
          hover:${colors.icon.active}
        `}
        aria-label="Add reaction button"
      >
        <SmilePlus size={16} />
      </div>
    </div>
  );
}
