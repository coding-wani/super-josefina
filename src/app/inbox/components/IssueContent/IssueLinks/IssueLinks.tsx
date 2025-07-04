import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { colors } from "@/lib/colors";

export default function IssueLinks() {
  const links: string[] = ["Link title 1", "Link title 2", "Link title 3"];
  const linkCount = links.length;

  return (
    <Accordion
      type="single"
      collapsible
      className="[&>*]:border-b-0 [&_[data-slot=accordion-trigger]]:hover:no-underline"
    >
      <AccordionItem value="sub-issue(s)">
        <AccordionTrigger
          className={`pb-1 flex items-center justify-start gap-1 text-xs ${colors.text.secondary}`}
        >
          {linkCount === 1 ? "Link" : "Links"}
        </AccordionTrigger>
        <AccordionContent className="pb-0">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <span>{link}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
