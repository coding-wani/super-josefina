import { config } from "@/lib/config";
import { Search, SquarePen } from "lucide-react";
import Link from "next/link";
import { colors } from "@/lib/colors";

export default function Sidebar() {
  return (
    <aside
      className="h-full w-fit p-2 mr-2 flex flex-col gap-4"
      aria-label="Sidebar"
    >
      <header
        className={`whitespace-nowrap ${colors.text.primary} w-80 flex items-center justify-between`}
        aria-label="Sidebar header"
      >
        <Link href="/" className="text-sm font-semibold" aria-label="Home link">
          {config.companyName}
        </Link>

        <div
          className="flex items-center gap-2"
          aria-label="Search and create buttons"
        >
          <button
            className={`p-1.5 ${colors.hover.bg} rounded-lg transition-colors`}
            aria-label="Search workspace"
          >
            <Search size={16} />
          </button>
          <button
            className={`${colors.bg.card} rounded-lg p-1.5 ${colors.border.primary} ${colors.hover.cardBg} transition-colors duration-200`}
            aria-label="Create new post, issue or task"
          >
            <SquarePen size={16} />
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-2" aria-label="Sidebar links">
        <Link className={colors.text.link} href="/inbox">
          Inbox
        </Link>
      </div>
    </aside>
  );
}
