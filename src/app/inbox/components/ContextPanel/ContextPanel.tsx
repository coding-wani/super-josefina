import { colors } from "@/lib/colors";

export default function ContextPanel() {
  return (
    <>
      <div className={`border-l ${colors.border.primary}`} />
      <div className="h-full p-4 w-60">ContextPanel</div>
    </>
  );
}
