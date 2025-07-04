import { colors } from "@/lib/colors";
import { Paperclip } from "lucide-react";

export default function AttachFileButton() {
  return (
    <div
      aria-label="Attach images, files or videos button"
      className={`
        flex
        items-center
        justify-center
        size-7.5
        rounded-full
        hover:border
        ${colors.border.secondary} 
        hover:${colors.bg.primary} 
        ${colors.icon.secondary} 
        ${colors.icon.groupHover} 
        hover:${colors.icon.active}`}
    >
      <Paperclip size={12} />
    </div>
  );
}
