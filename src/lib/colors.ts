export const colors = {
  text: {
    primary: "text-neutral-900",
    secondary: "text-neutral-600",
    link: "text-neutral-900",
    linkActive: "text-neutral-900",
  },

  icon: {
    primary: "text-neutral-700",
    secondary: "text-neutral-500",
    active: "text-neutral-900",
    hover: "group-hover:text-neutral-900",
  },

  reminderIcon: {
    active: "text-violet-500",
  },

  bg: {
    primary: "bg-neutral-100",
    secondary: "bg-neutral-200",
    tertiary: "bg-neutral-50",
    card: "bg-white",
    workspaceLogo: "bg-cyan-600",
    unreadMarker: "bg-violet-500",
  },

  border: {
    primary: "border-neutral-200",
    secondary: "border-neutral-100",
  },

  hover: {
    bg: "hover:bg-neutral-200",
    cardBg: "hover:bg-neutral-100",
  },
} as const;
