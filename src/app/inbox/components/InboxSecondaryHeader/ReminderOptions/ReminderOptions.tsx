import { Clock3 } from "lucide-react";
import { colors } from "@/lib/colors";

export default function ReminderOptions() {
  return (
    <div
      className={`flex items-center px-1.5 py-0.75 rounded border ${colors.border.primary}`}
    >
      <Clock3 size={16} className={colors.reminderIcon.active} />
    </div>
  );
}
