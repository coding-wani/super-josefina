import { colors } from "@/lib/colors";
import { GitBranch, Link, Tag } from "lucide-react";

export default function IssueCopyButtons() {
  return (
    <div
      aria-label="Issue copy buttons"
      className="flex items-center gap-2"
      role="group"
    >
      <Link size={14} className={`hover:${colors.bg.primary}`} />
      <Tag size={14} className={`hover:${colors.bg.primary}`} />
      <GitBranch size={14} className={`hover:${colors.bg.primary}`} />
    </div>
  );
}
