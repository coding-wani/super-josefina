import { colors } from "@/lib/colors";
import { CircleUserRound } from "lucide-react";
import Timeline from "./Timeline/Timeline";

export default function IssueActivity() {
  return (
    <div aria-label="Issue activity">
      <div
        aria-label="Issue activity header"
        className="flex items-center justify-between"
      >
        <span className={`font-medium ${colors.text.primary}`}>Activity</span>
        <div
          aria-label="Issue subscription"
          className="flex items-center gap-2 px-1"
        >
          <div
            aria-label="Subscribe button"
            className={`
              flex
              items-center
              justify-center
              h-8
              px-3
              rounded
              border
              border-transparent
              hover:${colors.border.secondary}
              hover:${colors.bg.primary}
              ${colors.text.secondary}
              hover:${colors.text.primary}
            `}
          >
            <span className="text-xs">Subscribe</span>
          </div>

          <div
            aria-label="Subscribers options button"
            className={`
              flex 
              items-center
              justify-center
              size-8
              rounded
              hover:border
              ${colors.border.secondary} 
              hover:${colors.bg.primary}
              ${colors.icon.secondary}
              ${colors.icon.groupHover} 
              hover:${colors.icon.active}
            `}
          >
            <CircleUserRound size={14} />
          </div>
        </div>
      </div>

      <Timeline />
    </div>
  );
}
