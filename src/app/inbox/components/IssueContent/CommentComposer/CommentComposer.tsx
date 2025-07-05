import { colors } from "@/lib/colors";

export default function CommentComposer() {
  return (
    <div
      className={`
        flex
        items-center
        gap-2
        border
        ${colors.border.primary} 
        rounded-md
        p-4
        bg-white shadow-sm
      `}
    >
      <span>Comment Composer</span>
    </div>
  );
}
