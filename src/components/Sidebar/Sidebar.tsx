import { config } from "@/lib/config";
import { Search, SquarePen } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="h-full w-fit py-2 flex flex-col gap-4"
      aria-label="Sidebar"
    >
      <header
        className="whitespace-nowrap text-neutral-700 w-80 flex items-center justify-between"
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
            className="p-1.5 hover:bg-neutral-200 rounded-lg transition-colors"
            aria-label="Search workspace"
          >
            <Search size={16} />
          </button>
          <button
            className="bg-white rounded-lg p-1.5 border border-neutral-200 hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Create new post, issue or task"
          >
            <SquarePen size={16} />
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-2 px-2" aria-label="Sidebar links">
        <Link href="/inbox">Inbox</Link>
      </div>
    </aside>
  );
}
