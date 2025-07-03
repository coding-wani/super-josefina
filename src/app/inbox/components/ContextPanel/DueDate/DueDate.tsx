import { colors } from "@/lib/colors";

export default function DueDate() {
  return (
    <div aria-label="Due date">
      <span className={`text-xs font-medium ${colors.text.secondary}`}>
        Due date
      </span>
    </div>
  );
}
