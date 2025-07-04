import { colors } from "@/lib/colors";
import { CircleUserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <div
        aria-label="Activity timeline"
        className="flex flex-col gap-2 border p-4 border-blue-500"
      >
        <div
          aria-label="timeline event"
          className="flex items-center gap-2 border border-blue-200"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span> Timeline event 4</span>
        </div>
        <div
          aria-label="timeline event"
          className="flex items-center gap-2 border border-blue-200"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span> Timeline event 3</span>
        </div>
        <div
          aria-label="timeline event"
          className="flex items-center gap-2 border border-blue-200"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span> Timeline event 2</span>
        </div>
        <div
          aria-label="timeline event"
          className="flex items-center gap-2 border border-blue-200"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span> Timeline event 1</span>
        </div>
      </div>
    </div>
  );
}
