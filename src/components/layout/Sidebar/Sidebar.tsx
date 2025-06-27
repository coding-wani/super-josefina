import { config } from "@/lib/config";
import { CircleDot, Inbox, NotebookPen, Search, SquarePen } from "lucide-react";
import Link from "next/link";
import { colors } from "@/lib/colors";
import { NavLink } from "@/components/layout/Sidebar/NavLink";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <Link
          href="/"
          className="text-sm font-semibold"
          aria-label="Workspace Home link"
        >
          {config.workspaceName}
        </Link>

        <div
          className="flex items-center gap-2"
          aria-label="Search and create buttons"
        >
          <button
            className={`group p-1.5 ${colors.hover.bg} rounded-lg transition-colors`}
            aria-label="Search workspace"
          >
            <Search
              size={16}
              className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
            />
          </button>
          <button
            className={`group ${colors.bg.card} rounded-lg p-1.5 border ${colors.border.primary} ${colors.hover.cardBg} transition-colors duration-200`}
            aria-label="Create new post, issue or task"
          >
            <SquarePen
              size={16}
              className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
            />
          </button>
        </div>
      </header>
      <div className="flex flex-col gap-2" aria-label="Sidebar links">
        <NavLink href="/inbox">
          <Inbox
            size={16}
            className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
          />
          <span className="text-sm">Inbox</span>
        </NavLink>
        <NavLink href="/my-issues">
          <CircleDot
            size={16}
            className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
          />
          <span className="text-sm">My issues</span>
        </NavLink>
        <NavLink href="/drafts">
          <NotebookPen
            size={16}
            className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
          />
          <span className="text-sm">Drafts</span>
        </NavLink>

        <Accordion
          className="[&>*]:border-b-0 [&_[data-slot=accordion-trigger]]:hover:no-underline"
          type="multiple"
        >
          <AccordionItem value="workspace">
            <AccordionTrigger>Workspace</AccordionTrigger>
            <AccordionContent>Workspace NavLinks here</AccordionContent>
          </AccordionItem>
          <AccordionItem value="favorites">
            <AccordionTrigger>Favorites</AccordionTrigger>
            <AccordionContent>Favorites NavLinks here</AccordionContent>
          </AccordionItem>
          <AccordionItem value="your-teams">
            <AccordionTrigger>Your teams</AccordionTrigger>
            <AccordionContent>Your teams NavLinks here</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
