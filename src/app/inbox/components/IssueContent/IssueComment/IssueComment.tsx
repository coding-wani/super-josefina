import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { colors } from "@/lib/colors";

export default function IssueComment({
  id,
  description,
  author,
}: {
  id: string;
  description: string;
  author: string;
}) {
  return (
    <div
      aria-label="Issue comment"
      className={`border ${colors.border.primary} rounded-md p-4 bg-white shadow-sm`}
      key={id}
    >
      <div
        aria-label="Issue comment header"
        className="flex items-center gap-2"
      >
        <Avatar className="size-5">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Issue comment avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className={`${colors.text.primary} text-sm font-normal`}>
          {author}
        </span>
        <span className={`${colors.text.secondary} text-xs`}>2d ago</span>
      </div>
      <div aria-label="Issue comment body" className="flex items-center gap-2">
        <span className={`${colors.text.primary}`}>
          <span className={`${colors.text.primary}`}>{description}</span>
        </span>
      </div>
    </div>
  );
}
