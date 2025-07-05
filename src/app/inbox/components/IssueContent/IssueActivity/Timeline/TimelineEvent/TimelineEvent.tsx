import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type TimelineEventProps = {
  id: string;
  description: string;
};

export default function TimelineEvent({ id, description }: TimelineEventProps) {
  return (
    <div
      aria-label="Timeline event"
      className="flex items-center gap-2"
      key={id}
    >
      <Avatar className="size-5">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="Timeline event avatar"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span>{description}</span>
    </div>
  );
}
