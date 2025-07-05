import { colors } from "@/lib/colors";

export default function TimelineEventSeparator() {
  return (
    <div
      aria-label="Activity timeline event separator"
      className={`ml-[7.5px] my-[2px] border-l ${colors.border.primary} h-[12px]`}
    />
  );
}
