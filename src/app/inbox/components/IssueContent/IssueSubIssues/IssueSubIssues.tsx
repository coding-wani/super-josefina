import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { colors } from "@/lib/colors";

export default function IssueSubIssues() {
  const subIssues: string[] = [
    "Sub-issue title 1",
    "Sub-issue title 2",
    "Sub-issue title 3",
  ];
  const subIssueCount = subIssues.length;

  return (
    <>
      {subIssueCount === 0 ? (
        <div>+ Add sub-issue</div>
      ) : (
        <Accordion
          type="single"
          collapsible
          className="[&>*]:border-b-0 [&_[data-slot=accordion-trigger]]:hover:no-underline"
        >
          <AccordionItem value="sub-issue(s)">
            <AccordionTrigger
              className={`pb-1 flex items-center justify-start gap-1 text-xs ${colors.text.secondary}`}
            >
              {subIssueCount === 1 ? "Sub-issue" : "Sub-issues"}
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <ul>
                {subIssues.map((subIssue, index) => (
                  <li key={index}>
                    <span>{subIssue}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}
