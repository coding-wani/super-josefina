import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { config } from "@/lib/config";
import { colors } from "@/lib/colors";
import { getInitials } from "@/lib/utils";
import { ChevronDown, RefreshCw, Settings, UserPlus } from "lucide-react";
import { LogOut } from "lucide-react";

export default function WorkspaceSwitcher() {
  return (
    <DropdownMenu aria-label="Workspace switcher">
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 rounded-md px-1 py-0.5">
          <div
            className={`size-5.5 rounded flex items-center justify-center text-white text-xs mr-0.5 leading-none ${colors.bg.workspaceLogo}`}
            aria-label="Workspace logo"
          >
            {getInitials(config.workspaceName).toUpperCase()}
          </div>
          <span className="text-sm font-semibold">{config.workspaceName}</span>
          <ChevronDown size={12} strokeWidth={2.5} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64">
        <DropdownMenuItem>
          <Settings size={16} />
          Settings
          <DropdownMenuShortcut>⌘ then ...</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus size={16} />
          Invite and manage members
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <RefreshCw size={16} />
          Switch workspace
          <DropdownMenuShortcut>⌘ then ...</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut size={16} />
          Log out
          <DropdownMenuShortcut>⌥ then ...</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
