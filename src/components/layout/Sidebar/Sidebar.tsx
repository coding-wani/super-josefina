import { config } from "@/lib/config";
import {
  Box,
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  Inbox,
  Layers2,
  NotebookPen,
  Search,
  SquarePen,
  SquareUserRound,
  UsersRound,
} from "lucide-react";
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
      <div className="flex flex-col" aria-label="Sidebar links">
        <NavLink href="/inbox" className="p-1">
          <Inbox
            size={16}
            className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
          />
          <span className="text-sm">Inbox</span>
        </NavLink>
        <NavLink href="/my-issues" className="p-1">
          <CircleDot
            size={16}
            className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
          />
          <span className="text-sm">My issues</span>
        </NavLink>
        <NavLink href="/drafts" className="p-1">
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
            <AccordionTrigger className="pb-1 flex items-center justify-start gap-2">
              Workspace
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <NavLink href="/members" className="p-1">
                <UsersRound
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">Members</span>
              </NavLink>
              <NavLink href="/teams" className="p-1">
                <SquareUserRound
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">Teams</span>
              </NavLink>
              <NavLink href="/projects" className="p-1">
                <Box
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">Projects</span>
              </NavLink>
              <NavLink href="/views" className="p-1">
                <Layers2
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">Views</span>
              </NavLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="favorites">
            <AccordionTrigger className="pb-1 flex items-center justify-start gap-2">
              Favorites
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <NavLink href="/" className="p-1">
                <CircleDashed
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">
                  Welcome to {config.workspaceName}
                </span>
              </NavLink>
              <NavLink href="/" className="p-1">
                <CircleDashed
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">How to use {config.appName}</span>
              </NavLink>
              <NavLink href="/" className="p-1">
                <CircleDotDashed
                  size={16}
                  className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                />
                <span className="text-sm">Next steps</span>
              </NavLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="your-teams">
            <AccordionTrigger className="pb-1 flex items-center justify-start gap-2">
              Your teams
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <Accordion
                className="[&>*]:border-b-0 [&_[data-slot=accordion-trigger]]:hover:no-underline"
                type="multiple"
              >
                <AccordionItem value="red-team">
                  <AccordionTrigger className="flex items-center justify-start gap-2 py-1">
                    <SquareUserRound
                      size={16}
                      className={`${colors.icon.primary} ${colors.icon.hover} transition-colors !rotate-0`}
                    />
                    <span className="text-sm font-normal">Red Team</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <NavLink href="/" className="p-1">
                      <CircleDot
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Issues</span>
                    </NavLink>
                    <NavLink href="/projects" className="p-1">
                      <Box
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Projects</span>
                    </NavLink>
                    <NavLink href="/views" className="p-1">
                      <Layers2
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Views</span>
                    </NavLink>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="blue-team">
                  <AccordionTrigger className="flex items-center justify-start gap-2 py-1">
                    <SquareUserRound
                      size={16}
                      className={`${colors.icon.primary} ${colors.icon.hover} transition-colors !rotate-0`}
                    />
                    <span className="text-sm font-normal">Blue Team</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <NavLink href="/" className="p-1">
                      <CircleDot
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Issues</span>
                    </NavLink>
                    <NavLink href="/projects" className="p-1">
                      <Box
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Projects</span>
                    </NavLink>
                    <NavLink href="/views" className="p-1">
                      <Layers2
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Views</span>
                    </NavLink>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="green-team">
                  <AccordionTrigger className="flex items-center justify-start gap-2 py-1">
                    <SquareUserRound
                      size={16}
                      className={`${colors.icon.primary} ${colors.icon.hover} transition-colors !rotate-0`}
                    />
                    <span className="text-sm font-normal">Green Team</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <NavLink href="/" className="p-1">
                      <CircleDot
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Issues</span>
                    </NavLink>
                    <NavLink href="/projects" className="p-1">
                      <Box
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Projects</span>
                    </NavLink>
                    <NavLink href="/views" className="p-1">
                      <Layers2
                        size={16}
                        className={`${colors.icon.primary} ${colors.icon.hover} transition-colors`}
                      />
                      <span className="text-sm">Views</span>
                    </NavLink>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
