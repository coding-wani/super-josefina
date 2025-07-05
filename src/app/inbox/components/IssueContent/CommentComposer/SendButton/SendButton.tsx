import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { colors } from "@/lib/colors";

interface SendButtonProps {
  hasContent: boolean;
  type: "comment" | "reply";
}

export default function SendButton({ hasContent, type }: SendButtonProps) {
  return (
    <Button
      aria-label={`Send ${type} button`}
      variant="ghost"
      size="icon"
      className={`
        size-6
        border
        rounded-full
        ${
          hasContent
            ? `${colors.bg.sendingButton} ${colors.bg.hover.sendingButton} ${colors.border.sendingButton} text-white hover:text-white`
            : `bg-white ${colors.border.primary} ${colors.text.secondary}`
        }
        `}
    >
      <ArrowUp />
    </Button>
  );
}
